export interface Coin {
	info: {
		index: number;
		name: string;
		creator: {
			name: string;
			id: string;
		};
		url: string;
	};
	preOwner: {
		id: string;
		publicKey: string;
	};
	owner: {
		id: string;
		publicKey: string;
	};
	sign: string;
}
