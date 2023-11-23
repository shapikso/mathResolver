import {USER_KEY} from "../constants/storageKeys";
import {LocalUser} from "../components/types/types";
import {fromJson, toJson} from "../helpers/helpers";

export class LocalStorageService {
    setUser = (user: LocalUser) => {
        localStorage.setItem(USER_KEY,toJson(user));
    };
    getUser = (): LocalUser =>  {
        const user = localStorage.getItem(USER_KEY);
        return fromJson(user ? user : '');
    };
    deleteUser = () => {
        sessionStorage.removeItem(USER_KEY);
    };
}
