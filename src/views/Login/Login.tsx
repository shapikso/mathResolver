import React from 'react';
import "./Login.scss";
import {Link, useNavigate} from "react-router-dom";
import {userSignUp} from "../SignUp/types";
import {defaultUser} from "../../constants/user";
import {UserService} from "../../services/userServices";
import {Form, Formik} from "formik";
import Title from "../../components/common/Title/Title";
import InputForm from "../../components/common/InputForm/InputForm";
import {SYMBOLS_IN_FIELDS} from "../../constants/errorMessages";
import {inputSize} from "../../components/types/types";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import FormSubmitter from "../../components/FormSubmitter/FormSubmiter";
import {buttonColor, buttonSize} from "../../components/types/types";
import {object} from "yup";
import user from "../../validation/user";
import Button from "../../components/common/Button/Button";
import {ReactComponent as Facebook} from '../../assets/facebook-fill.svg';
import LINKS from "../../constants/links";
import useLoading from "../../hooks/useLoading";

export const validationSchema = object({
    email: user.email,
    password: user.password,
});
const Login = () => {
    const navigate = useNavigate();
    const initialValues: userSignUp = defaultUser;
    const user = new UserService();
    const {isLoading, loadingWhileReq} = useLoading();
    const onSubmit = ({email,password}: userSignUp) => {
        loadingWhileReq(user.loginUser(email,password)).then(() => navigate(LINKS.BOARD_LINK));
    };
    const onFacebookClick = () => loadingWhileReq(user.loginUserFacebook()).then(() => navigate(LINKS.BOARD_LINK));
    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form className={'LoginForm'}>
                        <Title>Login</Title>
                        <div className={'LoginForm__inputWrapper'}>
                            <InputForm
                                id="email"
                                name="email"
                                type="email"
                                inputLabel="Email"
                                maxLength={SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_EMAIL}
                                placeholder="Enter email"
                                size={inputSize.large}
                            />
                            <InputPassword
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Enter password"
                            />
                        </div>
                        <FormSubmitter disabled={isLoading} size={buttonSize.large}>Login</FormSubmitter>
                        <div className="LoginForm__divider">
                            <div className="LoginForm__divider__line"></div>
                            <p className="LoginForm__divider__text">or</p>
                            <div className="LoginForm__divider__line"></div>
                        </div>
                        <Button
                            disabled={isLoading}
                            type="button"
                            color={buttonColor.facebook}
                            onClick={onFacebookClick}
                        >
                            <Facebook/>
                            Login with Facebook
                        </Button>
                    </Form>
                )}
            </Formik>
            <div className={'LoginForm__textWrapper'}>
                <p> Don`t have an account? <Link to={LINKS.SIGN_UP_LINK}>SignUp</Link></p>
            </div>
        </>
    );
};

export default Login;