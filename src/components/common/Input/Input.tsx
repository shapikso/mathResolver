import React, { forwardRef } from 'react';
import "./Input.scss";
import {SYMBOLS_IN_FIELDS} from "../../../constants/errorMessages";
import {InputProps} from "../../types/types";

const Input = forwardRef(({
    size,
    type = 'text',
    placeholder,
    name,
    id,
    onChange,
    onBlur,
    value,
    error,
    iconRight = false,
    iconLeft = false,
    icon,
    maxLength = SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_TITLE,
    disabled,
    readOnly,
} : InputProps, ref: any ) => (
    <>
        <input
            ref={ref}
            type={type}
            className={`
                    defaultInput 
                    defaultInput--${size} 
                    defaultInput--${error ? 'error' : ''}
                    defaultInput--${iconRight ? 'iconRight' : ''} 
                    defaultInput--${iconLeft ? 'iconLeft' : ''}
                `}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
        />
        {icon}
    </>
));

export default Input;