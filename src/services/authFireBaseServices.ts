import {catchDecorator} from "../decorators/catchDecorator";
import {
    AuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import {auth} from "../firebase";

export class AuthFireBaseServices {
    @catchDecorator
    protected async firebaseSignUp (email: string, password: string) {
        return await createUserWithEmailAndPassword(auth, email, password);
    }
    @catchDecorator
    protected async firebaseLoginIn (email: string, password: string) {
        return await signInWithEmailAndPassword(auth, email, password);
    }
    @catchDecorator
    async firebaseLoginInWithProvider (provider: AuthProvider) {
        return await signInWithPopup(auth, provider);
    }
    @catchDecorator
    protected async firebaseSignOut () {
        return await signOut(auth);
    }
}
