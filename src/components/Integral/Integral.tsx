import React from 'react';
import { useNavigate } from 'react-router-dom';
import {generateExpression} from "../../helpers/generateIntegralEasy";
import Title from "../common/Title/Title";
import Integrate from "./Integrate";

const Integral = () => {
    const navigate = useNavigate();
    const mainExpression = generateExpression();
    console.log(mainExpression);
    //mainExpression.main='x^3/sqrt(x^4 + -2)+2/(x + -3)^5';
    //mainExpression.main='1*x*e^(2*x)-3/(x - 1)^2';
    //mainExpression.main='x^3/sqrt(x^4 + -1)-6*x^1 + 2*x^-4 + 3*x^2';
    //mainExpression.main='3*x^2e^(x^3+1)+x^3/(x^4 + -3)';
    //mainExpression.main='x^5/sqrt(x^6 + -1)+4*x^3e^(x^4-2)';
    //mainExpression.main='4*e^(-3*x + -2)+(tan(4*x))^2';
    return (
        <div className={'board'}>
            <div className={'board__topPart'}>
                <Title>
                    Integral
                </Title>
            </div>
            <Integrate mainExpression={mainExpression}/>
        </div>
    );
};

export default Integral;