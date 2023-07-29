export interface Coin {
	index: number;
	name: string;
	creator: {
		name: string;
		id: string;
	};
	url: string;
	sign: string;
}
