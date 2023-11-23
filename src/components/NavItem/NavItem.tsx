import React, {ReactNode} from 'react';
import {ReactComponent as House} from '../../assets/house.svg';
import './NavItem.scss';

interface Props {
    children: ReactNode,
    active: boolean,
}
const NavItem = ({children, active}: Props) => {
    return (
        <div className={`navItem navItem${active ? '--active' : ''}`}>
            <House/>
            <p>{children}</p>
        </div>
    );
};


export default NavItem;