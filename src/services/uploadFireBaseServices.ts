import {catchDecorator} from "../decorators/catchDecorator";
import {getDownloadURL, StorageReference, uploadBytes} from "firebase/storage";

export class UploadFireBaseServices {
    @catchDecorator
    public async firebaseUploadImage (imageRef: StorageReference,file: File) {
        return await uploadBytes(imageRef, file);
    }
    @catchDecorator
    public async firebaseGetImageURL (imageRef: StorageReference) {
        return await getDownloadURL(imageRef);
    }
}