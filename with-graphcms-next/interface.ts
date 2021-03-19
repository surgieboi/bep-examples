export interface Cart {
	currency: string;
	items: CartItem[];
}

interface CartItem {
	id: string;
	image: string;
	quantity: number;
	title: string;
	price: number;
	grams: number;
	variantInfo?: VariantInfo[];
	sku: string;
	willBeShipped?: boolean;
}

interface VariantInfo {
	id: string;
	name: string;
	value: string;
}

export interface DolaWindow extends Window {
	Dolapay: {
		attachDola: (cart: Cart, callback: () => void) => {};
	};
}

export interface IProduct {
	title: string;
	image: {
		url: string;
	}[];
	id: string;
	quantity: number;
	description: {
		text: string;
	};
	price: number;
	weight: number;
	sku: string;
	willBeShipped: string;
	variants: { label: string; options: any[] }[];
}
