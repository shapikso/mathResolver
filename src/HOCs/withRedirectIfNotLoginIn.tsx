import React from 'react';
import {Navigate} from "react-router-dom";
import { SessionService } from '../services/sessionStorageServices';
import LINKS from '../constants/links';

const withRedirectIfNotLoginIn = <T extends {}>(Component: React.ComponentType<T>) =>
    (
        (props: T) => {
            const session = new SessionService();
            const token = session.getAccessToken();
            return token
                ? <Component {...props}/>
                : <Navigate  to={LINKS.LOGIN_LINK} replace/>;
        }
    );


export default withRedirectIfNotLoginIn;