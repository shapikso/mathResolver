import React from 'react';
import './Board.scss';
import Title from '../../components/common/Title/Title';
import {useNavigate} from "react-router-dom";
import Derivative from "../../components/Derivative/Derivative";
import { generateExpression } from '../../helpers/generateDerivativeEasy';

type TProps = {
    hiddenCalculator? :boolean;
}

const DerivativePage = ({hiddenCalculator = false}: TProps) => {
    const navigate = useNavigate();
    const mainExpression = generateExpression();
    return (
        <div className={'board'}>
            {!hiddenCalculator && <div className={'board__topPart'}>
                <Title>
                    Derivative
                </Title>
            </div>}
            <Derivative mainExpression={mainExpression} hiddenCalculator={hiddenCalculator}/>
        </div>
    );
};

export default DerivativePage;
