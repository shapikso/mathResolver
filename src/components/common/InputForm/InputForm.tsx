import React from 'react';
import "./InputForm.scss";
import {useField} from "formik";
import Input from "../Input/Input";
import {InputProps} from "../../types/types";

interface Props extends InputProps{
    name: string,
    inputLabel: string,
}
const InputForm = ({
    size,
    inputLabel,
    type = 'text',
    placeholder,
    name,
    id,
    icon,
    iconRight,
    maxLength,
    readOnly = false,
    disabled = false
} : Props) => {
    const [field, meta] = useField({type,placeholder,name,id,maxLength,});
    return (
        <div className={'inputFormWrapper'}>
            { inputLabel &&
                (
                    <label className={`inputFormWrapper__label ${meta.touched && meta.error ? 'error' : ''}`} htmlFor={inputLabel}>{inputLabel}</label>
                )
            }
            <Input
                type={type}
                size={size}
                id={id}
                placeholder={placeholder}
                error={meta.touched && !!meta.error}
                iconRight = {iconRight}
                icon={icon}
                disabled={disabled}
                maxLength={maxLength}
                readOnly={readOnly}
                {...field}
            />
            <div className={`inputFormWrapper__errorWrapper error` }>
                {meta.touched && meta.error}
            </div>
        </div>
    );
};

export default InputForm;