import React from 'react';
import {object} from 'yup';
import user from "../../validation/user";
import {Link, useNavigate} from "react-router-dom";
import {SYMBOLS_IN_FIELDS} from "../../constants/errorMessages";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputForm from "../../components/common/InputForm/InputForm";
import Title from "../../components/common/Title/Title";
import FormSubmitter from "../../components/FormSubmitter/FormSubmiter";
import "./SignUp.scss";
import {Form, Formik} from "formik";
import {inputSize} from "../../components/types/types";
import {buttonSize} from "../../components/types/types";
import {userSignUp} from "./types";
import {defaultUser} from "../../constants/user";
import {UserService} from "../../services/userServices";
import LINKS from "../../constants/links";
import {ReactComponent as Plus} from "../../assets/plus.svg";
import useLoading from "../../hooks/useLoading";

export const validationSchema = object({
    email: user.email,
    password: user.password,
    firstName: user.firstLastName,
    lastName: user.firstLastName,
    phoneNumber: user.phone,
    confirmPassword: user.passwordConfirmation
});

const SignUp = () => {
    const navigate = useNavigate();
    const {isLoading, loadingWhileReq} = useLoading();
    const initialValues: userSignUp = defaultUser;
    const user = new UserService();
    const onSubmit = (values: userSignUp) => loadingWhileReq(user.signUpUser(values)).then(() => navigate(LINKS.LOGIN_LINK));
    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form className={'form'}>
                        <div className={'form__titleWrapper'}>
                            <Title>SignUp</Title>
                            <button type="button" className={'form__titleWrapper__avatar'}><Plus/></button>
                        </div>
                        <div className={'form__inputWrapper'}>
                            <InputForm
                                id="firstName"
                                name="firstName"
                                type="text"
                                inputLabel="First name"
                                maxLength={SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_EMAIL}
                                placeholder="Enter first name"
                                size={inputSize.large}
                            />
                            <InputForm
                                id="lastName"
                                name="lastName"
                                type="text"
                                inputLabel="Last name"
                                maxLength={SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_EMAIL}
                                placeholder="Enter last name"
                                size={inputSize.large}
                            />
                            <InputForm
                                id="email"
                                name="email"
                                type="email"
                                inputLabel="Email"
                                maxLength={SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_EMAIL}
                                placeholder="Enter email"
                                size={inputSize.large}
                            />
                            <InputForm
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                inputLabel="Phone number"
                                maxLength={SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_EMAIL}
                                placeholder="Enter phone number"
                                size={inputSize.large}
                            />
                            <InputPassword
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Enter password"
                            />
                            <InputPassword
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm password"
                                placeholder="Enter confirm password"
                            />
                        </div>
                        <FormSubmitter disabled={isLoading} size={buttonSize.large}>SignUp</FormSubmitter>
                    </Form>
                )}
            </Formik>
            <div className={'form__textWrapper'}>
                <p> Do you have an account? <Link to={LINKS.LOGIN_LINK}>Login</Link></p>
            </div>
        </>
    );
};

export default SignUp;