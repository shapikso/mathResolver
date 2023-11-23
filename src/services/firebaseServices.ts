import {DocumentData, DocumentReference, getDoc, getDocs, Query, setDoc, WithFieldValue} from "firebase/firestore";
import {catchDecorator} from "../decorators/catchDecorator";
import {UploadFireBaseServices} from "./uploadFireBaseServices";

export class FirebaseStorageService extends UploadFireBaseServices{
    @catchDecorator
    protected async firebasePost (ref: DocumentReference, data: WithFieldValue<DocumentData>) {
        return await setDoc(ref, data);
    }
    @catchDecorator
    protected async firebaseGetSingleField (doc: DocumentReference) {
        return await getDoc(doc);
    }
    @catchDecorator
    protected async firebaseGetFields (query: Query) {
        return await getDocs(query);
    }
    @catchDecorator
    protected async firebasePut () {

    }
    @catchDecorator
    protected async firebaseDelete () {

    }

}