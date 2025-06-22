import React from 'react';
import { useNavigate } from 'react-router-dom';
//import {generateExpression} from "../../helpers/generateIntegralEasy";
import {generateExpression} from "../../helpers/generateIntegral";
import Title from "../common/Title/Title";
import Integrate from "../IntegralV2/Integrate";
import "./IntegralShowcase.scss";

const showCase = [
    {
        main: "(-8*x +1)/(1*x-4)",
        mathjax: "\\int A_{nm}(x),dx",
        results: [
            '-8x-31log(abs(x-4))',
            '-31log(abs(x-4))-8x',
            '-31log(abs(x-4))-4x-4x',
            '-31log(x-4)-4x-4x',
            '-32log(x-4)-4x-4x',
        ]
    },    {
        main: "(-8*x +1)/(1*x-4)",
        mathjax: "\\int\\frac{-8x+1}{x-4},dx",
        results: [
            '-8x-31log(abs(x-4))',
            '-31log(abs(x-4))-8x',
            '-31log(abs(x-4))-4x-4x',
            '-31log(x-4)-4x-4x',
            '-32log(x-4)-4x-4x',
        ]
    },
    {
        main: "(-5*x +2)/(-1*x+2)",
        mathjax: "\\int\\frac{-5x+2}{-x+2},dx",
        results: [
            '5x+8log(abs(x-2))',
            '5*x+8*log(abs(x-2))',
            '8log(abs(x-2)) + 5x',
            '10*x+8log(abs(x-2))',
        ]
    },
    {
        "main": "((3*x+3)/x)^3",
        "mathjax": "\\int(\\frac{3*x+3}{x})^3,dx",
        results: [
            '81log(abs(x))+27*(2x^3-6x-1)/2x^2',
            '27*(2x^3-6x-1)/2x^2+81log(abs(x))',
            '21*(2x^3-6x-1)/2x^2+81log(abs(x))',
        ]
    },
    {
        "main": "(2 * x - 3)*sin(x^2 -3*x^1 +3)",
        "mathjax": "\\int(2 * x - 3)*sin(x^2-3x+3),dx",
        results: [
            '-cos(x^2-3x+3)',
            '-cos(x^2+3-3x)',
            'cos(x^2+3-3x)',
            'cos(x^2+2-3x)',
        ]
    },
];


export const IntegralShowcase = () => {
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
                    Integral Showcase
                </Title>
            </div>
            {/*///<Integrate mainExpression={mainExpression} hiddenCalculator/>*/}
            <div className={'showcase'}>
                {
                    showCase.map((item) => (
                        <div key={item.main} className="showcase__item">
                            <Integrate mainExpression={item} hiddenCalculator/>
                            <div className={'showcase__item__right'}>
                                {item.results.map((result) => (<span key={result}>{result}</span>))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};