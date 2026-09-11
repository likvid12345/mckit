<script module>
	import { AdMob } from '@capacitor-community/admob';

	let queue = Promise.resolve();

	function enqueue(task) {
		queue = queue.then(task).catch((e) => console.error('Ad queue error', e));
		return queue;
	}

	// Registruje se jednom za ceo app. showBanner() se vraća uspešno čim se
	// zahtev POŠALJE, ne kad se reklama STVARNO učita — pravi rezultat stiže
	// ovde, asinhrono. Ako "bannerAdFailedToLoad" ispali, plugin tiho ukloni
	// banner iz prikaza bez ijedne JS greške — zato ovo logujemo eksplicitno.
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
		});
	}
</script>

<script>
	import { onDestroy } from 'svelte';
	import { Capacitor } from '@capacitor/core';
	import { BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
	import { current } from '../../../shared.svelte';

	let { adId = 'ca-app-pub-1543540069792476/4401869267' } = $props();

	let alive = false;
	let shown = false;

	onDestroy(() => {
		alive = false;

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

		enqueue(async () => {
			if (!Capacitor.isNativePlatform()) return;
			if (!alive) return; // korisnik je već otišao dalje pre nego što je ovaj red došao na red

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
	});
</script>
