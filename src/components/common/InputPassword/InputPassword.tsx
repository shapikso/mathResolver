import React, {useState} from 'react';
import "../../../views/SignUp/SignUp.scss";
import {ReactComponent as OpenEye} from '../../../assets/openEye.svg';
import {ReactComponent as ClosedEye} from '../../../assets/closedEye.svg';
import InputForm from "../InputForm/InputForm";
import {inputSize} from "../../types/types";

interface Props {
    id: string,
    name: string,
    label: string,
    placeholder: string
}
const InputPassword = ({id, name,label,placeholder}: Props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleIcon = () => setIsPasswordVisible(!isPasswordVisible);
    return (
        <InputForm
            id={id}
            name={name}
            type={`${isPasswordVisible ? "text" : "password"}`}
            inputLabel={label}
            placeholder={placeholder}
            size={inputSize.large}
            icon={ <div className="form__iconWrapper" onClick={toggleIcon}>{isPasswordVisible ? <ClosedEye/> : <OpenEye/>}</div>}
            iconRight
        />
    );
};

export default InputPassword;