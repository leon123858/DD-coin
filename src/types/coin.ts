export interface Owner {
	id: string;
	publicKey: string;
}

export interface Creator {
	name: string;
	id: string;
}

export interface Coin {
	info: {
		index: number;
		name: string;
		creator: Creator;
		url: string;
	};
	owner: {
		preOwner: Owner;
		curOwner: Owner;
	};
	sign: string;
}
