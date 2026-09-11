import { Capacitor } from '@capacitor/core';
import {
	AdMob,
	AdmobConsentStatus
	// AdmobConsentDebugGeography // uvezi ovo dok testiraš lokalno, vidi napomenu ispod
} from '@capacitor-community/admob';

// NAPOMENA: @capacitor-community/admob (v8) izvozi tip PrivacyOptionsRequirementStatus
// ali ga njegov konkretan JS barrel export ne re-exportuje kao runtime vrednost (bag u paketu),
// zato ovde poredimo direktno sa string vrednošću ('REQUIRED') umesto sa enum-om.
import { current } from '../shared.svelte';

/**
 * Device ID tvog telefona za testiranje. Prvi put kad pokreneš app na pravom
 * ad unit ID-u (bez ovoga), Android Studio Logcat / `adb logcat | grep Ads`
 * ispisaće nešto tipa:
 *   "Use RequestConfiguration.Builder().setTestDeviceIds(Arrays.asList("ABCD1234..."))
 *   to get test ads on this device."
 * Kopiraj taj string (ABCD1234...) ovde. Bez ovoga, pravi ad unit na tvom
 * telefonu neće servirati ni test ni prave reklame dovoljno pouzdano dok
 * app/ad unit ne "sazri" kod Google-a (može potrajati i do 24-48h za nov nalog).
 */
const TEST_DEVICE_IDS: string[] = [
	'8F713B68DB116E07CCCE4C7DED6EC102'
];

/**
 * Pokreće Google UMP (User Messaging Platform) tok za GDPR/US privacy consent
 * i tek nakon toga (ako je dozvoljeno) inicijalizuje AdMob i pušta oglase.
 *
 * Mora se pozvati PRE bilo kakvog AdMob.initialize() / showBanner() poziva.
 *
 * Testiranje van EU/UK-a:
 * Da bi lokalno testirao formu (bez pravog EU uređaja), dodaj:
 *   debugGeography: AdmobConsentDebugGeography.EEA,
 *   testDeviceIdentifiers: TEST_DEVICE_IDS
 * unutar requestConsentInfo() poziva ispod, i obavezno ukloni pre objave na Play Store.
 */
export async function initializeConsentAndAds() {
	if (!Capacitor.isNativePlatform()) {
		// na webu nema pravih oglasa, ali dozvoli AdSlot-u da se "ponaša" normalno u devu
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
			await AdMob.initialize({
				initializeForTesting: TEST_DEVICE_IDS.length > 0, // ukloni/postavi na false pre objave na Play Store
				testingDevices: TEST_DEVICE_IDS
			});
		}
	} catch (e) {
		console.error('Consent flow failed', e);
		// fail-closed: ako nešto pukne, radije ne prikazuj oglase nego riskiraj da prikažeš bez pristanka
		current.canRequestAds = false;
	}
}

/**
 * Otvara Google-ovu "privacy options" formu da korisnik naknadno promeni svoj pristanak.
 * Stavi dugme koje ovo poziva na vidljivo mesto (npr. Privacy Policy ekran) —
 * Google to zahteva kad je current.privacyOptionsRequired === true.
 */
export async function openPrivacyOptions() {
	if (!Capacitor.isNativePlatform()) return;

	try {
		await AdMob.showPrivacyOptionsForm();
	} catch (e) {
		console.error('Privacy options form failed', e);
	}
}

/**
 * Resetuje UMP stanje (korisno samo za razvoj/testiranje forme iznova).
 */
export async function resetConsent() {
	if (!Capacitor.isNativePlatform()) return;
	await AdMob.resetConsentInfo();
	current.canRequestAds = false;
}
