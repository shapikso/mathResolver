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
import DerivativePageWithExpressions from "./views/Derivative/Derivative";
import IntegralV2 from "./components/IntegralV2/Integral";
import {IntegralShowcase} from "./components/IntegralShowcase/IntegralShowcase";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={LINKS.BOARD_LINK} element={<Board/>}/>
                <Route path={LINKS.DERIVATIVE_LINK} element={<DerivativePageWithExpressions/>}/>
                <Route path={'/'} element={<Integral/>}/>
                <Route path={LINKS.INTEGRAL_LINK} element={<IntegralV2/>}/>
                <Route path={LINKS.INTEGRAL_SHOWCASE_LINK} element={<IntegralShowcase/>}/>
            </Route>
            <Route path={LINKS.SIGN_UP_LINK} element={<SingUp/>} />
            <Route path={LINKS.LOGIN_LINK} element={<Login/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}

export default App;
