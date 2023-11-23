import React, {useRef} from 'react';
import './GeneralSettings.scss';
import InputForm from "../common/InputForm/InputForm";
import {ImageData, inputSize} from "../types/types";
import Input from "../common/Input/Input";
import {useField} from "formik";
import defaultImage from '../../assets/defaultImage.png';
import UploadImage from "../common/UploadImage";

interface Props {
    onSetImgData: (boardInfo: ImageData) => void
    imageData: ImageData,
}
const GeneralSettings = ({onSetImgData, imageData}:Props) => {
    const inputRef  = useRef<HTMLInputElement>(null);

    const onChooseFileClick = () => {
        inputRef.current?.click();
    };

    const [field] = useField('');
    return (
        <div className={'generalSettings'}>
            <InputForm
                id="title"
                name="title"
                type="text"
                inputLabel="Title"
                placeholder="Enter title"
                size={inputSize.noMaxLength}
            />
            <div className={'generalSettings__logo'}>
                <label className={`inputFormWrapper__label`}>Board logo</label>
                <div className={'generalSettings__logo__inputWrapper'}>
                    <button type="button" onClick={onChooseFileClick} className='generalSettings__logo__inputWrapper__chooseFile'>Choose file</button>
                    <Input id="file" readOnly value={imageData.name ? imageData.name :'File not chosen'} type="text" size={inputSize.noMaxLength}/>
                    <img src={ imageData.url ? imageData.url : defaultImage} alt="ups"/>
                    <UploadImage onSetImgData={onSetImgData} inputRef={inputRef}/>
                </div>
            </div>
            <div className={'generalSettings__description'}>
                <label className={`inputFormWrapper__label`}>Description (optional)</label>
                <textarea
                    placeholder="Enter description"
                    id="description"
                    className={'generalSettings__description__textArea'}
                    {...field}
                    value={field.value.description}
                />
            </div>
            <div className={'generalSettings__divider'}/>
        </div>
    );
};

export default GeneralSettings;