import { Coin } from './coin';
import { Transaction } from './transaction';

export interface User {
	uid: string;
	publicKey: string;
	friends: string[];
	logs: Transaction[];
	mails: Transaction[];
	coins: Coin[];
}
