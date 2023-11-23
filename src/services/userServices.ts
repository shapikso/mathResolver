import { FacebookAuthProvider, User as FireBaseUser } from "firebase/auth";
import { collection, doc, query, where } from "firebase/firestore";
import {db} from "../firebase";
import {userSignUp} from "../views/SignUp/types";
import {toast} from "react-toastify";
import firebase from "firebase/compat";
import {MESSAGES} from "../constants/messages";
import {LocalStorageService} from "./localStorageServices";
import {SessionService} from "./sessionStorageServices";
import { User } from "../components/types/types";
import {FirebaseStorageService} from "./firebaseServices";
import {getFirstLastName} from "../helpers/helpers";
import {Mixin} from "ts-mixer";
import {AuthFireBaseServices} from "./authFireBaseServices";

interface NewUser extends firebase.User {
    accessToken: string
}

export class UserService extends Mixin(FirebaseStorageService, AuthFireBaseServices) {

    private session = new SessionService();
    private localStorage = new LocalStorageService();
    private usersRef = collection(db, "users");
    public async addUser (user: User) {
        const q = query(this.usersRef, where("uid", "==", user.uid));
        const {docs} = await this.firebaseGetFields(q);
        if (docs.length === 0) {
            return await this.firebasePost(doc(this.usersRef, user.uid), user);
        }
        return;
    }

    public async setUser (user: FireBaseUser) {
        const userDoc = await this.firebaseGetSingleField(doc(db,'users', user.uid));
        const userFromDb = userDoc.data();
        if (!userFromDb) return;
        const {uid,lastName,firstName} = userFromDb;
        this.localStorage.setUser({uid, firstName, lastName});
        this.session.setSession({accessToken: (<NewUser>user).accessToken, refreshToken: user.refreshToken});
    }
    public async signUpUser ({email,password,firstName,lastName,phoneNumber}: userSignUp) {
        const {user} = await this.firebaseSignUp(email, password);
        await this.addUser({
            uid: user.uid,
            firstName: <string>firstName,
            lastName: <string>lastName,
            phoneNumber,
            email,
            authProvider: "local",
        });
        toast.success(MESSAGES.REGISTRATION_SUCCESSFUL);
        return;
    }

    public async loginUser (email: string, password: string) {
        const {user} = await this.firebaseLoginIn(email, password);
        await this.setUser(user);
        toast.success(MESSAGES.LOGIN_SUCCESSFUL);

    }
    public async signOutUser () {
        await this.firebaseSignOut();
        this.session.deleteSession();
        this.localStorage.deleteUser();
        toast.success(MESSAGES.SIGN_OUT_SUCCESSFUL);
    }

    public async loginUserFacebook () {
        const provider = new FacebookAuthProvider();
        const {user} = await this.firebaseLoginInWithProvider(provider);
        const userInfo = getFirstLastName(<string>user.displayName);
        await this.addUser({
            uid: user.uid,
            firstName: userInfo[0],
            lastName: userInfo[1],
            phoneNumber: user.phoneNumber,
            email: user.email,
            authProvider: user.providerId
        });
        this.localStorage.setUser({uid: user.uid, firstName: userInfo[0], lastName: userInfo[1]});
        this.session.setSession({accessToken: (<NewUser>user).accessToken, refreshToken: user.refreshToken});
        toast.success(MESSAGES.LOGIN_SUCCESSFUL);
    }
}