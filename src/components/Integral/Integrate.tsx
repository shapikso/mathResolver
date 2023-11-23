import React, {ChangeEvent, useState} from 'react';
import './Derivative.scss';
import Input from "../common/Input/Input";
import {buttonSize, inputSize} from "../types/types";
import {isResultRight} from "../../helpers/integrate";
import Button from "../common/Button/Button";
import { toast } from 'react-toastify';
import { MathComponent } from "mathjax-react";

import {generateExpression} from "../../helpers/generateDerivativeEasy";
import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

type TProps = {
    mainExpression: {main: string, mathjax: string},
};

const Integrate = ({mainExpression}: TProps) => {
    const [result, setResult] = useState('2sqrt(x)');
    const mainTest = '1/sqrt(x)';
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setResult(e.target.value);
    const handleClick = () => {
        const isResult = isResultRight(mainExpression.main, result,1,2);
        toast.success(isResult ? 'ваш ответ правильный' : 'ваш ответ не правильный');
    };
    //const result = '2x + cos(x)';
    //const mainExpression = generateExpression();
    return (
        <div className="derivativeWrapper">
            <div className="derivativeWrapper__derivativeExpression"><MathComponent tex={String.raw`${mainExpression.mathjax}`} /></div>
            <Input value={result} size={inputSize.large} onChange={handleChange}/>
            <Button size={buttonSize.large} onClick={handleClick}>Submit</Button>
            <div className="derivativeWrapper__derivativeExpression"><MathComponent tex={String.raw`${math.derivative(mainExpression.main, 'x') }`} /></div>
        </div>
    );
};

export default Integrate;