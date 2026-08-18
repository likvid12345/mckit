import { writable } from 'svelte/store';
import { isPremium } from './purchases';

export const premium = writable(false);

export async function refreshPremiumStatus() {
	premium.set(await isPremium());
}
