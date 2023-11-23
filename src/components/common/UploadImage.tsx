import React, {ChangeEvent} from 'react';
import {ref} from "firebase/storage";
import {storage} from "../../firebase";
import {ImageData} from "../types/types";
import {toast} from "react-toastify";
import {MESSAGES} from "../../constants/messages";
import {UploadFireBaseServices} from "../../services/uploadFireBaseServices";

interface Props {
    inputRef: React.RefObject<HTMLInputElement>,
    onSetImgData: (boardInfo: ImageData) => void
}

const uploadService = new UploadFireBaseServices();

const UploadImage = ({inputRef, onSetImgData}:Props) => {
    const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const imageRef = ref(storage, file.name);
        await uploadService.firebaseUploadImage(imageRef, file);
        const url = await uploadService.firebaseGetImageURL(imageRef);
        onSetImgData({name: file.name, url});
        toast.success(MESSAGES.IMAGE_LOADED_SUCCESSFUL);
    };
    return (
        <input onChange={onFileChange} type="file" ref={inputRef}/>
    );
};

export default UploadImage;