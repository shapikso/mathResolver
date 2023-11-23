import React from 'react';
import {useFormikContext} from "formik";
import Button from "../common/Button/Button";
import {isObjectEmpty} from "../../helpers/helpers";
import {buttonSize} from "../types/types";

interface Props {
    size: buttonSize,
    disabled?: boolean,
    children: React.ReactNode,
}
const FormSubmitter = ({size, disabled = false, children}: Props) => {
    const {errors} = useFormikContext();
    return (
        <Button disabled={!(isObjectEmpty(errors)) || disabled} size={size}>{children}</Button>
    );
};

export default FormSubmitter;