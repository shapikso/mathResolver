import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './Derivative.scss';
import Input from "../common/Input/Input";
import {buttonSize, inputSize} from "../types/types";
import {isResultRight} from "../../helpers/derivative";
import Button from "../common/Button/Button";
import { toast } from 'react-toastify';
import { MathComponent } from "mathjax-react";

import {generateExpression} from "../../helpers/generateDerivativeEasy";
import {create, all} from 'mathjs';
import {convertToUaFormulas} from "../../helpers/convertToUaformulas";
import Calculator from "../Calculator/Calculator";
import Title from "../common/Title/Title";

const config = { };
const math = create(all, config);

type TProps = {
    mainExpression: {main: string, mathjax: string},
    hiddenCalculator?: boolean
};

const Derivative = ({mainExpression, hiddenCalculator = false}: TProps) => {
    const [result, setResult] = useState('2x + cos(x)');
    const [mathJaxResult, setMathJaxResult] = useState('2x + cos(x)');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setResult(e.target.value);
    const handleClick = () => {
        const isResult = isResultRight(mainExpression.main, convertToUaFormulas(result),0.001,[1,2]);
        toast.success(isResult ? 'ваш ответ правильный' : 'ваш ответ не правильный');
    };

    useEffect(() => {
        if (!result) return;
        try {
            const parsedResult = math.parse(result).toTex({parenthesis: 'auto'});
            setMathJaxResult(parsedResult);
        } catch (error) {
            // @ts-ignore
            toast.error(error.message);
        }

    },[result]);


    const insertTextAtCursor = (text: string) => {
        if (!inputRef) return;
        const input = (inputRef as React.MutableRefObject<HTMLInputElement>).current;
        if (!input) return;
        const start = input.selectionStart;
        const end = input.selectionEnd;

        if (start === null || end === null) return;

        const before = result.slice(0, start);
        const after = result.slice(end);

        const newValue = before + text + after;
        setResult(newValue);

        setTimeout(() => {
            input.setSelectionRange(start + text.length, start + text.length);
        }, 0);
    };

    return (
        <div className="derivative">
            <div className="derivativeWrapper">
                <div className="derivativeWrapper__derivativeExpression">
                    What is the derivative of{' '}
                    <MathComponent tex={String.raw`${mainExpression.mathjax}`}/>{' '}
                    ?
                </div>
                <Input ref={inputRef} value={result} size={inputSize.large} onChange={handleChange}/>
                <Button size={buttonSize.large} onClick={handleClick}>Submit</Button>
                <div className="derivativeWrapper__derivativeExpression">
                    User Answer:
                </div>
                <div className="derivativeWrapper__derivativeExpression"><MathComponent tex={mathJaxResult}/></div>
            </div>
            {!hiddenCalculator && <Calculator setValue={insertTextAtCursor}/>}
        </div>
    );
};

export default Derivative;
