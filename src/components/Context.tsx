import { ReactNode, createContext, useState } from 'react';
import { ContextType, UserInfo } from '../types';
import { registerLoginCallback } from '../utils/auth';

export const Context = createContext<ContextType>({
	name: '',
	uid: '',
	photo: '',
	isLogin: false,
	setLogin: () => {},
	setUser: () => {},
});

export const ContextProvider = ({ children }: { children?: ReactNode }) => {
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [user, setUser] = useState<UserInfo>({
		name: '',
		photo: '',
		uid: '',
	});

	registerLoginCallback(
		(user) => {
			setIsLogin(true);
			setUser({
				name: user.displayName || '',
				photo: user.photoURL || '',
				uid: user.uid,
			});
		},
		() => {
			setIsLogin(false);
			setUser({
				name: '',
				photo: '',
				uid: '',
			});
		}
	);

	return (
		<Context.Provider
			value={{
				isLogin,
				photo: user.photo,
				uid: user.uid,
				name: user.name,
				setLogin: (state: boolean) => {
					setIsLogin(state);
				},
				setUser: (info: UserInfo | null) => {
					if (info) {
						setUser(info);
					} else {
						setUser({ name: '', photo: '', uid: '' });
					}
				},
			}}
		>
			{children}
		</Context.Provider>
	);
};
