import { Capacitor } from '@capacitor/core';
import { AdMob, AdmobConsentStatus } from '@capacitor-community/admob';
import { current } from '../shared.svelte';

/**
 * Pokreće Google UMP consent flow i inicijalizuje AdMob
 * samo kada je dozvoljeno prikazivanje oglasa.
 */
export async function initializeConsentAndAds() {
	if (!Capacitor.isNativePlatform()) {
		current.canRequestAds = true;
		return;
	}

	try {
		let info = await AdMob.requestConsentInfo();

		if (info.isConsentFormAvailable && info.status === AdmobConsentStatus.REQUIRED) {
			info = await AdMob.showConsentForm();
		}

		current.canRequestAds = info.canRequestAds;
		current.privacyOptionsRequired = info.privacyOptionsRequirementStatus === 'REQUIRED';

		if (info.canRequestAds) {
			await AdMob.initialize();
		}
	} catch (e) {
		console.error('Consent flow failed', e);
		current.canRequestAds = false;
	}
}

/**
 * Omogućava korisniku da naknadno promijeni privacy consent.
 */
export async function openPrivacyOptions() {
	if (!Capacitor.isNativePlatform()) return;

	try {
		await AdMob.showPrivacyOptionsForm();
	} catch (e) {
		console.error('Privacy options form failed', e);
	}
}
