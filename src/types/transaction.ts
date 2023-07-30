import { Coin } from './coin';

export interface Transaction {
	from: '';
	to: '';
	coin: Coin;
	timestamp: number;
}
