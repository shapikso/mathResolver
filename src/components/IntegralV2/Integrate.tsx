import React, {ChangeEvent, useState, useEffect, useRef} from 'react';
import './Derivative.scss';
import Input from "../common/Input/Input";
import {buttonSize, inputSize} from "../types/types";
import {isResultRight} from "../../helpers/integrate";
import Button from "../common/Button/Button";
import { toast } from 'react-toastify';
import { MathComponent } from "mathjax-react";
import {create, all} from 'mathjs';
import { convertToUaFormulas } from "../../helpers/convertToUaformulas";
import Calculator from "../Calculator/Calculator";
import {checkIntegralContinuity} from "../../helpers/checkIntegralContinuity";

const config = { };
const math = create(all, config);

type TProps = {
    mainExpression: {main: string, mathjax: string,
    //    functionDomain: [number, number]
    },
};

const Integrate = ({mainExpression}: TProps) => {
    const [result, setResult] = useState('2sqrt(x)');
    const [mathJaxResult, setMathJaxResult] = useState('2sqrt(x)');
    const inputRef = useRef<HTMLInputElement>(null);
    const [range, setRange] = useState<[number, number]>([1,2]);
    const [valueAdd, setValueAdd] = useState<number>(1);
    const [failureCount, setFailureCount] = useState<number>(0);
    const [minRange,maxRange] = range;

    const mainTest = '1/sqrt(x)';

    //const [startPoint, endPoint] = mainExpression.functionDomain;
    //const startOFRange = +( startPoint === (-Infinity) ? 0 : (startPoint + 1)).toFixed();
    // endRangeForResult = (startOFRange + 1) < Infinity ? startOFRange + 1 : endPoint;

    useEffect(() => {
        console.log('range');
        if ( minRange === 1 && maxRange === 2) return;
        console.log('setting');
        setRange([1,2]);
    },[mainExpression]);

    useEffect(() => {
        const isIntegralContinuity = checkIntegralContinuity(mainExpression.main, minRange,maxRange);
        if (!isIntegralContinuity) {
            setRange([minRange+valueAdd,maxRange+valueAdd]);
            setFailureCount(failureCount+1);
        }
    },[range,mainExpression,valueAdd]);

    useEffect(() => {
        if (failureCount < 25) return;
        console.log('here to much tryes');
        setFailureCount(0);
        setRange([1,2]);
        setValueAdd(-1);
    },[failureCount]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setResult(e.target.value);
    const handleClick = () => {
        const isResult = isResultRight(mainExpression.main, convertToUaFormulas(result), minRange,maxRange);
        toast.success(isResult ? 'ваш ответ правильный' : 'ваш ответ не правильный');
    };




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
            <Input ref={inputRef} value={result} size={inputSize.large} onChange={handleChange}/>
            <Button size={buttonSize.large} onClick={handleClick}>Submit</Button>
            <div className="derivativeWrapper__derivativeExpression"><MathComponent tex={mathJaxResult} /></div>
            <Calculator setValue={insertTextAtCursor}/>
        </div>
    );
};

export default Integrate;