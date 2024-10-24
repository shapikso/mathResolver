import React from 'react';
import './Derivative.scss';
import Title from '../../components/common/Title/Title';
import {useNavigate} from "react-router-dom";
import Derivative from "../../components/Derivative/Derivative";
import { generateExpression } from '../../helpers/generateDerivativeEasy';
import DerivativePage from "../Board/Board";

const DerivativePageWithExpressions = () => {
    const navigate = useNavigate();
    const testCount = 45;
    return (
        <div className={'det_board'}>
            {Array(testCount).fill(undefined).map((item,index) =>
                <DerivativePage key={index} hiddenCalculator/>)
            }
        </div>
    );
};

export default DerivativePageWithExpressions;
