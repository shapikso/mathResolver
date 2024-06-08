import React, {ChangeEvent, useState, useEffect} from 'react';
import './Derivative.scss';
import Input from "../common/Input/Input";
import {buttonSize, inputSize} from "../types/types";
import {isResultRight} from "../../helpers/integrate";
import Button from "../common/Button/Button";
import { toast } from 'react-toastify';
import { MathComponent } from "mathjax-react";
import {create, all} from 'mathjs';
import { convertToUaFormulas } from "../../helpers/convertToUaformulas";

const config = { };
const math = create(all, config);

type TProps = {
    mainExpression: {main: string, mathjax: string, functionDomain: [number, number]},
};

const Integrate = ({mainExpression}: TProps) => {
    const [result, setResult] = useState('2sqrt(x)');
    const [mathJaxResult, setMathJaxResult] = useState('2sqrt(x)');

    const mainTest = '1/sqrt(x)';

    const [startPoint, endPoint] = mainExpression.functionDomain;
    const startOFRange = +( startPoint === (-Infinity) ? 0 : (startPoint + 1)).toFixed();
    const endRangeForResult = (startOFRange + 1) < Infinity ? startOFRange + 1 : endPoint;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setResult(e.target.value);
    const handleClick = () => {
        const isResult = isResultRight(mainExpression.main, convertToUaFormulas(result), startOFRange,endRangeForResult);
        toast.success(isResult ? 'ваш ответ правильный' : 'ваш ответ не правильный');
    };

    useEffect(() => {
        try {
            const parsedResult = math.parse(result).toTex({parenthesis: 'auto'});
            setMathJaxResult(parsedResult);
        } catch (error) {
            // @ts-ignore
            toast.error(error.message);
        }

    },[result]);
    //const result = '2x + cos(x)';
    //const mainExpression = generateExpression();
    return (
        <div className="derivativeWrapper">
            <div className="derivativeWrapper__derivativeExpression"><MathComponent tex={String.raw`${mainExpression.mathjax}`} /></div>
            <Input value={result} size={inputSize.large} onChange={handleChange}/>
            <Button size={buttonSize.large} onClick={handleClick}>Submit</Button>
            <div className="derivativeWrapper__derivativeExpression"><MathComponent tex={mathJaxResult} /></div>
            <div className="derivativeWrapper__derivativeExpression">{}</div>
        </div>
    );
};

export default Integrate;