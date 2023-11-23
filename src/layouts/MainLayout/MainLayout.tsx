import React, {useState} from 'react';
import "./MainLayout.scss";
import {Outlet} from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import withRedirectIfNotLoginIn from '../../HOCs/withRedirectIfNotLoginIn';

const MainLayout = () => {
    const [isSideBarShow, setIsSideBarShow] = useState(false);
    const toggleSideBar = () => setIsSideBarShow(!isSideBarShow);
    return (
        <div>
            <Header/>
            <div className={'activeArea'}>
                <SideBar isSideBarShow={isSideBarShow}/>
                <div className={'activeArea__main'}>
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default withRedirectIfNotLoginIn(MainLayout);