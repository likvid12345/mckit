import { isPremium as checkPremium, buyPremium } from './purchases';
import { current } from '../shared.svelte';

export async function refreshPremiumStatus() {
	current.isPremium = await checkPremium();
}

export async function purchasePremium(planId) {
	const success = await buyPremium(planId);
	current.isPremium = success;
	return success;
}
