import React from 'react';
import {Route, Routes} from "react-router-dom";
import NotFound from "./views/NotFound/NotFound";
import LINKS from "./constants/links";
import SingUp from "./views/SignUp/SignUp";
import Login from "./views/Login/Login";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Board from "./views/Board/Board";
import CreateBoard from './views/CreateBoard/CreateBoard';
import Integral from "./components/Integral/Integral";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={LINKS.BOARD_LINK} element={<Board/>}/>
                <Route path={LINKS.INTEGRAL_LINK} element={<Integral/>}/>
            </Route>
            <Route path={LINKS.SIGN_UP_LINK} element={<SingUp/>} />
            <Route path={LINKS.LOGIN_LINK} element={<Login/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}

export default App;
