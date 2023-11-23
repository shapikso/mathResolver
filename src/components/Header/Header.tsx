import React from 'react';
import "./Header.scss";
import {ReactComponent as User} from '../../assets/user.svg';
import {ReactComponent as PowerOff} from '../../assets/power-off.svg';
import Button from "../common/Button/Button";
import {useNavigate} from "react-router-dom";
import LINK from "../../constants/links";
import Title from "../common/Title/Title";
import {buttonColor, buttonSize} from "../types/types";
import {UserService} from "../../services/userServices";

const user = new UserService();
const Header = () => {
    const navigate = useNavigate();
    const logOut = () => {
        user.signOutUser();
        navigate(LINK.LOGIN_LINK);
    };
    const redirectToProfile = () => {};
    return (
        <header className={'header'}>
            <div className={'header__sideBar'}>
                <Title>
                    Logo
                </Title>
            </div>
            <div className={'header__rightPart'}>
                <div className={'header__rightPart__hideSideBar'}>
                    Hide sidebar
                </div>
                <div className={'header__rightPart__topMenu'}>
                    <Button onClick={redirectToProfile} size={buttonSize.header} color={buttonColor.transparent}>
                        <User/>
                        Profile
                    </Button>
                    <Button onClick={logOut} size={buttonSize.header} color={buttonColor.transparent}>
                        <PowerOff/>
                        Logout
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;