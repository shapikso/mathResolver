import {SESSION_KEY} from "../constants/storageKeys";
import {fromJson, toJson} from "../helpers/helpers";

interface Session {
    accessToken: string,
    refreshToken: string,
}

export class SessionService {
    public setSession = (session: Session) => {
        sessionStorage.setItem(SESSION_KEY, toJson(session));
    };
    public getAccessToken = () => {
        const session: Session = fromJson(<string>sessionStorage.getItem(SESSION_KEY));
        return session ? session.accessToken: '';
    };
    public deleteSession = () => {
        sessionStorage.removeItem(SESSION_KEY);
    };
}

