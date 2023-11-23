import React from 'react';
import "./Title.scss";

interface Props {
    children: React.ReactNode
}
const Title = ({children}: Props) => (<h1 className={`tittle`}> {children}</h1>);

export default Title;