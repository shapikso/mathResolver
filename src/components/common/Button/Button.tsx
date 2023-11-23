import React from 'react';
import "./Button.scss";
import {buttonColor, buttonSize} from "../../types/types";

interface Props {
    size?: buttonSize,
    disabled?: boolean,
    children: React.ReactNode,
    onClick?: () => void,
    color?: buttonColor,
    type?: "button" | "submit" | "reset"
}

const Button = ({ color = buttonColor.primary, size = buttonSize.large, children, onClick, disabled = false, type}: Props) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={`${'defaultButton'} defaultButton--${color} defaultButton--${size}`}>
            {children}
        </button>
    );
};
export default Button;