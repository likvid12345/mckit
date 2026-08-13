import { Preferences } from '@capacitor/preferences';

const KEY = 'onboarding_completed';

export async function hasCompletedOnboarding() {
	const { value } = await Preferences.get({ key: KEY });
	return value === 'true';
}

export async function setOnboardingCompleted() {
	await Preferences.set({ key: KEY, value: 'true' });
}
