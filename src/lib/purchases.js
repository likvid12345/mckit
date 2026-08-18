import { Purchases } from '@revenuecat/purchases-capacitor';

export async function initPurchases() {
	await Purchases.configure({
		apiKey: 'test_LYoEoFALRJKlJmhbPFbdzmVgpRz'
	});
}
export async function isPremium() {
	const { customerInfo } = await Purchases.getCustomerInfo();
	return customerInfo.entitlements.active['premium'] !== undefined;
}
export async function buyPremium() {
	const { current } = await Purchases.getOfferings();
	const pkg = current?.availablePackages[0];
	const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg });
	return customerInfo.entitlements.active['premium'] !== undefined;
}
