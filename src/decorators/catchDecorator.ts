import firebase from "firebase/compat";
import {ERROR_MESSAGES, FIREBASE_ERRORS} from "../constants/errorMessages";
import {toast} from "react-toastify";

export function catchDecorator(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
) {
    const newFunc = propertyDescriptor.value;
    propertyDescriptor.value = async function (...args: any[]) {
        try {
            return await newFunc.apply(target, args);
        } catch (error) {
            const {code} = <firebase.FirebaseError>error;
            toast.error(FIREBASE_ERRORS[code]? FIREBASE_ERRORS[code] : ERROR_MESSAGES.DEFAULT);
            return Promise.reject(error);
        }
    };
}