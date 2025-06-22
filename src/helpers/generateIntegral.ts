import {randomInteger, randomIntegerExclude} from "./helpers";
import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

type GeometricType = {
    [key: number]: string
}

export type DomainType = {
    [key: number]: [number, number]
}

class Expression {
    p = [2,3,'e',10];
    pow = [2,3,4];
    functionValueFirst: number;
    functionValueSecond: number;
    functionFirstPow: number;
    functionSecondPow : number;
    functionSecondValueFirst : number;
    functionSecondValueSecond : number;
    functionSecondValueThird : number;
    functionThirdValueFirst : number;
    functionThirdValueSecond : number;
    functionThirdRandom : number;
    functionFourthPow : number;
    functionFourthSqrtPow: number;
    functionFourthValueFirst : number;
    functionSixthPow: number;
    functionSixthGeometricType: number;
    functionSixthValueFirst: number;
    functionSeventhValueFirst: number;
    functionSeventhValueSecond: number;
    functionSeventhValueThird : number;
    functionSeventhValueFourth: number;
    functionEightGeometricType: number;
    functionEightValuePow: number;


    getGeometricType: GeometricType = {
        1: 'sin',
        2: 'cos',
        3: 'tan',
        4: 'cot',
    };

    getGeometricNormal: GeometricType = {
        1: 'sin',
        2: 'cos',
        3: 'tg',
        4: 'ctg',
    };

    getGeometricTypeNew: GeometricType = {
        1: 'atan',
        2: 'acot',
        3: 'log',
    };

    getGeometricNormalNew: GeometricType = {
        1: 'arctan',
        2: 'arcctg',
        3: 'ln',
    };

    constructor() {
        this.functionValueFirst = randomInteger(2, 4);
        this.functionValueSecond = randomInteger(-2, 4);
        this.functionFirstPow = randomInteger(2, 3);

        this.functionSecondPow = randomInteger(2,4);
        this.functionSecondValueFirst = randomInteger(2,5);
        this.functionSecondValueSecond = randomInteger(2,5);
        this.functionSecondValueThird = randomInteger(2,5);

        this.functionThirdValueFirst = randomInteger(2,5);
        this.functionThirdValueSecond = randomIntegerExclude(2,5, [this.functionThirdValueFirst]);
        this.functionThirdRandom = randomInteger(0,1, true);

        this.functionFourthPow = randomInteger(2,6);
        this.functionFourthSqrtPow = randomInteger(2,4);
        this.functionFourthValueFirst = randomInteger(-4,4);

        this.functionSixthPow = randomInteger(2,4);
        this.functionSixthGeometricType = randomInteger(1,4);
        this.functionSixthValueFirst = randomInteger(-4,4);

        this.functionSeventhValueFirst = randomInteger(-10,10);
        this.functionSeventhValueSecond = randomInteger(-6,8);
        this.functionSeventhValueThird = randomInteger(-2,2);
        this.functionSeventhValueFourth = randomInteger(-4,4);

        this.functionEightGeometricType = randomInteger(1,3);
        this.functionEightValuePow = randomInteger(2,6);
    }

    getExpression = (): GeometricType  => ({
        1: `((${this.functionValueFirst}*x+${this.functionValueSecond})/x)^${this.functionFirstPow}`,
        2: `(x^(${this.functionSecondPow}/${this.functionSecondValueFirst})-x^(1/${this.functionSecondValueSecond}))/(x^(1/${this.functionSecondValueThird}))`,
        3: `(${this.functionThirdValueFirst}*${this.functionThirdValueSecond}^x - ${this.functionThirdValueSecond}*${this.functionThirdValueFirst}^x)/(${this.functionThirdRandom 
            ? `${this.functionThirdValueSecond}^x`
            : `${this.functionThirdValueFirst}^x`
        })`,
        4: `x^${this.functionFourthPow-1}*(x^${this.functionFourthPow} +${this.functionFourthValueFirst})^(1/${this.functionFourthSqrtPow})`,
        5: `(x^${this.functionFourthPow-1})/sqrt(x^${this.functionFourthPow} +${this.functionFourthValueFirst})`,
        6: `(${math.derivative(`x^${this.functionSixthPow} +${this.functionFourthValueFirst}*x^${this.functionSixthPow-1} +${this.functionSixthValueFirst}`, 'x').toString()})*${this.getGeometricType[this.functionSixthGeometricType]}(x^${this.functionSixthPow} +${this.functionFourthValueFirst}*x^${this.functionSixthPow-1} +${this.functionSixthValueFirst})`,
        7: `(${this.functionSeventhValueFirst}*x +${this.functionSeventhValueSecond})/(${this.functionSeventhValueThird}*x+${this.functionSeventhValueFourth})`,
        8: `x^${this.functionEightValuePow}*${this.getGeometricTypeNew[this.functionEightGeometricType]}(x)`,
    });

    getExpressionForMathjax = (): GeometricType  => ({
        1: `(\\frac{${this.functionValueFirst}*x+${this.functionValueSecond}}{x})^${this.functionFirstPow}`,
        2: `\\frac{^${this.functionSecondValueFirst}\\sqrt{x^${this.functionSecondPow}}-^${this.functionSecondValueSecond}\\sqrt{x}}{^${this.functionSecondValueThird}\\sqrt{x}}`,
        3: `\\frac{${this.functionThirdValueFirst}*${this.functionThirdValueSecond}^x - ${this.functionThirdValueSecond}*${this.functionThirdValueFirst}^x}{${this.functionThirdRandom
            ? `${this.functionThirdValueSecond}^x`
            : `${this.functionThirdValueFirst}^x`
        }}`,
        4: `x${this.functionFourthPow-1 === 1 ? '' : `^${this.functionFourthPow-1}`}*${this.functionFourthSqrtPow === 2 ? '' : `^${this.functionFourthSqrtPow}`}\\sqrt{x^${this.functionFourthPow}+${this.functionFourthValueFirst}}`,
        5: `\\frac{x${this.functionFourthPow-1 === 1 ? '' : `^${this.functionFourthPow-1}`}}{\\sqrt{x^${this.functionFourthPow}+${this.functionFourthValueFirst}}}`,
        6: `(${math.derivative(`x^${this.functionSixthPow} + ${this.functionFourthValueFirst}*x^${this.functionSixthPow-1} + ${this.functionSixthValueFirst}`, 'x').toString()})*${this.getGeometricNormal[this.functionSixthGeometricType]}(x^${this.functionSixthPow}+${this.functionFourthValueFirst === 1 || this.functionFourthValueFirst === -1 ? `${this.functionFourthValueFirst}`.replace('1','') : this.functionFourthValueFirst}x${this.functionSixthPow-1 === 1 ? '' : `^${this.functionSixthPow-1}`}+${this.functionSixthValueFirst})`,
        7: `\\frac{${this.functionSeventhValueFirst === 1 || this.functionSeventhValueFirst === -1 ? `${this.functionSeventhValueFirst}`.replace('1','') : this.functionSeventhValueFirst}x+${this.functionSeventhValueSecond}}{${this.functionSeventhValueThird === 1 || this.functionSeventhValueThird === -1 ? `${this.functionSeventhValueThird}`.replace('1','') : this.functionSeventhValueThird}x+${this.functionSeventhValueFourth}}`,
        8: `x^${this.functionEightValuePow}${this.getGeometricNormalNew[this.functionEightGeometricType]}(x)`,
    });

    generateFunctionDomain = (): DomainType  => ({
        1: [1, Infinity],
        2: [1, Infinity],
        3: [1, Infinity],
        4: [math.parse(`(${Math.abs(this.functionFourthValueFirst)})^(1/${this.functionFourthPow})`).compile().evaluate({}), Infinity],
        5: [math.parse(`(${Math.abs(this.functionFourthValueFirst)})^(1/${this.functionFourthPow})`).compile().evaluate({}), Infinity],
        6: [1, Infinity],
        7: [math.parse(`(-1 * ${this.functionSeventhValueFourth})/(${this.functionSeventhValueThird})`).compile().evaluate({}), Infinity],
        8: [1, Infinity],
    });
}


export const generateExpression = (): { mathjax: string; main: string; functionDomain: [number, number] } => {
    const expression = new Expression();
    const A1 = randomInteger(1,8);
    console.log(A1);
    return {
        main :`${expression.getExpression()[A1]}`.replaceAll('+-','-'),
        mathjax: `\\int${expression.getExpressionForMathjax()[A1]},dx`.replaceAll('+-','-'),
        functionDomain: expression.generateFunctionDomain()[A1],
    };
};