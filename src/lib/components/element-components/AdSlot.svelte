<script module>
	let queue = Promise.resolve();

	function enqueue(task) {
		queue = queue.then(task).catch((e) => console.error('Ad queue error', e));
		return queue;
	}
</script>

<script>
	import { onMount, onDestroy } from 'svelte';
	import { Capacitor } from '@capacitor/core';
	import { AdMob, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';

	let { adId = 'ca-app-pub-3940256099942544/6300978111' } = $props();

	let alive = false;

	onMount(() => {
		alive = true;

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

	onDestroy(() => {
		alive = false;

		enqueue(async () => {
			if (!Capacitor.isNativePlatform()) return;

			try {
				await AdMob.removeBanner();
			} catch (e) {
				// nema aktivnog banner-a, ignoriši
			}
		});
	});
</script>
