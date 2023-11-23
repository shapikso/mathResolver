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
                <Link to={LINKS.BOARD_LINK}><NavItem active={pathname.includes(LINKS.BOARD_LINK)}>Производная</NavItem></Link>
                <Link to={LINKS.INTEGRAL_LINK}><NavItem active={pathname.includes(LINKS.INTEGRAL_LINK)}>Интегралл</NavItem></Link>
            </div>
        </div>

    );
};

export default SideBar;