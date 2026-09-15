<script module>
	import { AdMob } from '@capacitor-community/admob';

	let queue = Promise.resolve();

	function enqueue(task) {
		queue = queue.then(task).catch((e) => console.error('Ad queue error', e));
		return queue;
	}

	// Samo JEDAN native banner postoji u isto vreme (plugin ima jedan mAdView),
	// zato je i retry-callback jedan, deljen na nivou modula — uvek pripada
	// trenutno aktivnoj instanci AdSlot-a.
	let activeRetryCallback = null;

	// Registruje se jednom za ceo app. showBanner() se vraća uspešno čim se
	// zahtev POŠALJE, ne kad se reklama STVARNO učita — pravi rezultat stiže
	// ovde, asinhrono. Ako "bannerAdFailedToLoad" ispali (najčešće no-fill —
	// nema oglašivača u tom trenutku za tvoju zemlju), plugin tiho ukloni
	// banner iz prikaza. Ovde pokušavamo ponovo umesto da ostane praznо.
	let listenersRegistered = false;
	function registerAdListenersOnce() {
		if (listenersRegistered) return;
		listenersRegistered = true;

		AdMob.addListener('bannerAdLoaded', () => {
			console.log('[AdMob] banner loaded uspešno');
		});

		AdMob.addListener('bannerAdFailedToLoad', (info) => {
			// info sadrži { code, message } -- code npr. 3 = ERROR_CODE_NO_FILL
			console.error('[AdMob] banner FAILED to load:', JSON.stringify(info));
			activeRetryCallback?.();
		});
	}
</script>

<script>
	import { onDestroy } from 'svelte';
	import { Capacitor } from '@capacitor/core';
	import { BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
	import { current } from '../../../shared.svelte';

	let { adId = 'ca-app-pub-1543540069792476/4401869267' } = $props();

	const MAX_RETRIES = 3;
	const RETRY_DELAY_MS = 30_000; // Google savetuje da ne bombarduješ zahtevima, min ~30s

	let alive = false;
	let shown = false;
	let retryCount = 0;
	let retryTimer = null;

	function attemptShowBanner() {
		enqueue(async () => {
			if (!Capacitor.isNativePlatform()) return;
			if (!alive) return; // korisnik je već otišao dalje pre nego što je ovaj red došao na red

			registerAdListenersOnce();

			// ova instanca je sad "vlasnik" retry-a dok god je živa
			activeRetryCallback = () => {
				if (!alive || retryCount >= MAX_RETRIES) {
					if (activeRetryCallback) activeRetryCallback = null;
					return;
				}
				retryCount++;
				clearTimeout(retryTimer);
				retryTimer = setTimeout(attemptShowBanner, RETRY_DELAY_MS);
			};

			try {
				await AdMob.showBanner({
					adId,
					adSize: BannerAdSize.ADAPTIVE_BANNER,
					position: BannerAdPosition.BOTTOM_CENTER,
					margin: 0
				});
			} catch (e) {
				console.error('Banner show failed', e);
			}
		});
	}

	onDestroy(() => {
		alive = false;
		clearTimeout(retryTimer);
		if (activeRetryCallback) activeRetryCallback = null;

		if (shown) {
			enqueue(async () => {
				if (!Capacitor.isNativePlatform()) return;

				try {
					await AdMob.removeBanner();
				} catch (e) {
					// nema aktivnog banner-a, ignoriši
				}
			});
		}
	});

	// GDPR/UMP: banner se prikazuje tek kad current.canRequestAds postane true
	// (nakon što je consent tok u src/lib/consent.ts završen), ne pri samom mount-u.
	$effect(() => {
		alive = true;

		if (!current.canRequestAds || shown) return;

		shown = true;
		attemptShowBanner();
	});
</script>
