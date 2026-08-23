import { Purchases } from '@revenuecat/purchases-capacitor';

export async function initPurchases() {
	await Purchases.configure({
		apiKey: 'test_LYoEoFALRJKlJmhbPFbdzmVgpRz'
	});
}
export async function isPremium() {
	const { customerInfo } = await Purchases.getCustomerInfo();
	return customerInfo.entitlements.active['mckit Premium'] !== undefined;
}
const PLAN_MAP = {
	month: '$rc_monthly',
	year: '$rc_annual',
	lifetime: '$rc_lifetime'
};

export async function buyPremium(planId) {
	const { current } = await Purchases.getOfferings();
	const rcIdentifier = PLAN_MAP[planId] ?? planId;
	const pkg = current?.availablePackages.find((p) => p.identifier === rcIdentifier);
	if (!pkg) throw new Error(`Package ${planId} not found in offerings`);
	const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg });
	return customerInfo.entitlements.active['mckit Premium'] !== undefined;
}
