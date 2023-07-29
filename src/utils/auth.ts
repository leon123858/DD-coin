import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	User,
	signOut,
} from 'firebase/auth';
import { app } from './firebaseInit';

const auth = getAuth(app);

export const login = async () => {
	const provider = new GoogleAuthProvider();
	await signInWithPopup(auth, provider);
};

export const registerLoginCallback = (
	loginCallback: (user: User) => void,
	logoutCallback: () => void
) => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			loginCallback(user);
			return;
		}
		logoutCallback();
	});
};

export const logout = async () => {
	await signOut(auth);
};
