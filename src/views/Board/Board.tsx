import React from 'react';
import './Board.scss';
import Title from '../../components/common/Title/Title';
import {useNavigate} from "react-router-dom";
import LINKS from "../../constants/links";
import Derivative from "../../components/Derivative/Derivative";
import { generateExpression } from '../../helpers/generateDerivativeEasy';

const Board = () => {
    const navigate = useNavigate();
    const mainExpression = generateExpression();
    return (
        <div className={'board'}>
            <div className={'board__topPart'}>
                <Title>
                    Board
                </Title>
            </div>
            <Derivative mainExpression={mainExpression}/>
        </div>
    );
};

export default Board;