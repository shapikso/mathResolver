import React from 'react';
import "./SideBar.scss";
import NavItem from "../NavItem/NavItem";
import {Link, useLocation} from "react-router-dom";
import LINKS from "../../constants/links";
interface Props {
    isSideBarShow: boolean,
}

const SideBar = ({isSideBarShow}:Props) => {
    const {pathname} = useLocation();
    return (
        <div className={`sideBar ${ isSideBarShow ? 'sideBar--showSideBar' : ''}`}>
            <div className={'sideBar__nav'}>
                <Link to={LINKS.BOARD_LINK}><NavItem active={pathname.includes(LINKS.BOARD_LINK)}>Derivative </NavItem></Link>
                <Link to={LINKS.DERIVATIVE_LINK}><NavItem active={pathname.includes(LINKS.DERIVATIVE_LINK)}>Derivative Generating</NavItem></Link>
                <Link to={'/'}><NavItem active={pathname === '/'}>Integral</NavItem></Link>
                <Link to={LINKS.INTEGRAL_SHOWCASE_LINK}>
                    <NavItem active={pathname.includes(LINKS.INTEGRAL_SHOWCASE_LINK)}
                    >
                        Integral Showcase
                    </NavItem>
                </Link>
                <Link to={LINKS.INTEGRAL_LINK}><NavItem active={pathname.includes(LINKS.INTEGRAL_LINK)}>Integral V2</NavItem></Link>
            </div>
        </div>

    );
};

export default SideBar;
