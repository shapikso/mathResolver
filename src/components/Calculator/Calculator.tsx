import { MathComponent } from 'mathjax-react';
import './Calculator.scss';
import React from 'react';

const calculatorPresets = [
    {
        text: '|x|',
        value: 'abs(x)',
    },
    {
        text: 'x^{2}',
        value: 'x^2',
    },
    {
        text: '\\frac{1}{x}',
        value: '1/x',
    },
    {
        text: '\\sqrt{x}',
        value: 'sqrt(x)',
    },
    {
        text: '\\sqrt[3]{x}',
        value: 'x^(1/3)',
    },
    {
        text: '\\frac{1}{\\sqrt{x}}',
        value: '1/sqrt(x)',
    },
    {
        text: '\\ln{x}',
        value: 'log(x)',
    },
    {
        text: '\\log_{10}{x}',
        value: 'log(x,10)',
    },
    {
        text: 'cos(x)',
        value: 'cos(x)',
    },
    {
        text: 'sin(x)',
        value: 'sin(x)',
    },
    {
        text: 'tg(x)',
        value: 'tg(x)',
    },
    {
        text: 'ctg(x)',
        value: 'ctg(x)',
    },
];

interface CalculatorProps {
    setValue: (value: string) => void;
}

const Calculator = ({setValue}: CalculatorProps) => {

    return (
        <div className={'preset-wr'}>
            {
                calculatorPresets.map(preset =>
                    <div
                        className={'preset-item'}
                        key={preset.text}
                        onClick={() => setValue(preset.value)}
                    >
                        <MathComponent tex={preset.text} />
                    </div>)
            }
        </div>
    );
};

export default Calculator;