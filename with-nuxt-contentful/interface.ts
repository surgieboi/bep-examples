export interface Cart {
	currency: string;
	items: CartItem[];
}

export interface CartItem {
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
