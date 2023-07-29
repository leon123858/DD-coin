export interface UserInfo {
	name: string;
	photo: string;
	uid: string;
}

export interface ContextType {
	isLogin: boolean;
	name: string;
	photo: string;
	uid: string;
	setLogin: (state: boolean) => void;
	setUser: (state: UserInfo | null) => void;
}
