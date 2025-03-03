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
    functionValueFirst : number;
    functionValueSecond : number;
    functionValueThird : number;
    functionFirstPowFirst : number;
    functionFirstPowSecond : number;
    functionFirstPowThird : number;

    functionSecondPow  : number;
    functionSecondValue : number;

    functionThirdValue : number;
    functionThirdPow : number;

    functionFourthPow : number;
    functionFourthValueFirst : number;
    functionFourthValueSecond : number;

    functionFifthValueFirst : number;
    functionFifthValueSecond : number;
    functionFifthValueThird : number;

    functionSixthValueFirst : number;
    functionSixthValueSecond : number;

    functionSeventhValueFirst : number;
    functionSeventhValueSecond : number;
    functionSeventhValueThird : number;
    functionSeventhPow: number;

    functionEightGeometricType : number;
    functionEightValuePow : number;
    functionEightValue : number;


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
        this.functionValueFirst = randomInteger(-6, 6);
        this.functionValueSecond = randomInteger(-5, 4);
        this.functionValueThird = randomInteger(-7, 7);
        this.functionFirstPowFirst = randomInteger(-6, 6);
        this.functionFirstPowSecond = randomIntegerExclude(-5, 5,[this.functionFirstPowFirst, 0]);
        this.functionFirstPowThird = randomIntegerExclude(-4, 4, [this.functionFirstPowFirst, this.functionFirstPowSecond, 0]);

        this.functionSecondPow = randomInteger(2,6);
        this.functionSecondValue = randomInteger(-5,5);

        this.functionThirdValue = randomInteger(-2,6);
        this.functionThirdPow = randomInteger(2,6);

        this.functionFourthPow = randomInteger(2,6);
        this.functionFourthValueFirst = randomInteger(-4,4);
        this.functionFourthValueSecond = randomInteger(-4,4);

        this.functionFifthValueFirst = randomInteger(-4,4);
        this.functionFifthValueSecond = randomInteger(-4,4);
        this.functionFifthValueThird = randomInteger(-4,4);

        this.functionSixthValueFirst = randomInteger(-4,4);
        this.functionSixthValueSecond = randomInteger(-5,5);

        this.functionSeventhValueFirst = randomInteger(-5,5);
        this.functionSeventhValueSecond = randomInteger(1,4);
        this.functionSeventhValueThird = randomInteger(-2,2);
        this.functionSeventhPow= randomInteger(2,4);

        this.functionEightGeometricType = randomInteger(1,3);
        this.functionEightValuePow = randomInteger(1,3);
        this.functionEightValue = randomInteger(1,6);
    }

    getExpression = (): GeometricType  => ({
        1: `${this.functionValueFirst}*x^${this.functionFirstPowFirst} + ${this.functionValueSecond}*x^${this.functionFirstPowSecond} ${this.functionValueThird}*x^${this.functionFirstPowThird}`,
        2: `x^${this.functionSecondPow - 1}/(x^${this.functionSecondPow} + ${this.functionSecondValue})`,
        3: `x^${this.functionThirdPow - 1}/sqrt(x^${this.functionThirdPow} + ${this.functionThirdValue})`,
        4: `${this.functionFourthValueFirst}/(x + ${this.functionFourthValueSecond})^${this.functionFourthPow}`,
        5: `${this.functionFifthValueFirst}*e^(${this.functionFifthValueSecond}*x + ${this.functionFifthValueThird})`,
        6: `${this.functionSixthValueFirst}*x*e^(${this.functionSixthValueSecond}*x)`,
        7: `${this.functionSeventhValueFirst}*x^${this.functionSeventhPow - 1}e^(x^${this.functionSeventhPow}+${this.functionSeventhValueThird})`,
        8: `${this.getGeometricType[this.functionEightGeometricType]}^${this.functionEightValuePow}(${this.functionEightValue}*x)`,
    });
    //
    getExpressionForMathjax = (): GeometricType  => ({
        1: `${this.functionValueFirst}x^{${this.functionFirstPowFirst}}+${this.functionValueSecond}x^{${this.functionFirstPowSecond}}+${this.functionValueThird}x^{${this.functionFirstPowThird}}`,
        2: `\\frac{x^{${this.functionSecondPow - 1}}}{x^${this.functionSecondPow}+${this.functionSecondValue}}`,
        3: `\\frac{x^{${this.functionThirdPow - 1}}}{\\sqrt{x^${this.functionThirdPow}+${this.functionThirdValue}}}`,
        4: `\\frac{${this.functionFourthValueFirst}}{(x+${this.functionFourthValueSecond})^${this.functionFourthPow}}`,
        5: `${this.functionFifthValueFirst}e^{${this.functionFifthValueSecond}x+${this.functionFifthValueThird}}`,
        6: `${this.functionSixthValueFirst}xe^{${this.functionSixthValueSecond}x}`,
        7: `${this.functionSeventhValueFirst}x^{${this.functionSeventhPow - 1}}e^{x^${this.functionSeventhPow}+${this.functionSeventhValueThird}}`,
        8: `${this.getGeometricNormal[this.functionEightGeometricType]}${ this.functionEightValuePow !== 1 ? `^${this.functionEightValuePow}` : ''}(${this.functionEightValue}x)`,
    });

    // getExpression = (): GeometricType  => ({
    //     1: `((${this.functionValueFirst}*x+${this.functionValueSecond})/x)^${this.functionFirstPow}`,
    //     2: `(x^(${this.functionSecondPow}/${this.functionSecondValueFirst})-x^(1/${this.functionSecondValueSecond}))/(x^(1/${this.functionSecondValueThird}))`,
    //     3: `(${this.functionThirdValueFirst}*${this.functionThirdValueSecond}^x - ${this.functionThirdValueSecond}*${this.functionThirdValueFirst}^x)/(${this.functionThirdRandom
    //         ? `${this.functionThirdValueSecond}^x`
    //         : `${this.functionThirdValueFirst}^x`
    //     })`,
    //     4: `x^${this.functionFourthPow-1}*(x^${this.functionFourthPow} +${this.functionFourthValueFirst})^(1/${this.functionFourthSqrtPow})`,
    //     5: `(x^${this.functionFourthPow-1})/sqrt(x^${this.functionFourthPow} +${this.functionFourthValueFirst})`,
    //     6: `(${math.derivative(`x^${this.functionSixthPow} +${this.functionFourthValueFirst}*x^${this.functionSixthPow-1} +${this.functionSixthValueFirst}`, 'x').toString()})*${this.getGeometricType[this.functionSixthGeometricType]}(x^${this.functionSixthPow} +${this.functionFourthValueFirst}*x^${this.functionSixthPow-1} +${this.functionSixthValueFirst})`,
    //     7: `(${this.functionSeventhValueFirst}*x +${this.functionSeventhValueSecond})/(${this.functionSeventhValueThird}*x+${this.functionSeventhValueFourth})`,
    //     8: `x^${this.functionEightValuePow}*${this.getGeometricTypeNew[this.functionEightGeometricType]}(x)`,
    // });
    //
    // getExpressionForMathjax = (): GeometricType  => ({
    //     1: `(\\frac{${this.functionValueFirst}*x+${this.functionValueSecond}}{x})^${this.functionFirstPow}`,
    //     2: `\\frac{^${this.functionSecondValueFirst}\\sqrt{x^${this.functionSecondPow}}-^${this.functionSecondValueSecond}\\sqrt{x}}{^${this.functionSecondValueThird}\\sqrt{x}}`,
    //     3: `\\frac{${this.functionThirdValueFirst}*${this.functionThirdValueSecond}^x - ${this.functionThirdValueSecond}*${this.functionThirdValueFirst}^x}{${this.functionThirdRandom
    //         ? `${this.functionThirdValueSecond}^x`
    //         : `${this.functionThirdValueFirst}^x`
    //     }}`,
    //     4: `x${this.functionFourthPow-1 === 1 ? '' : `^${this.functionFourthPow-1}`}*${this.functionFourthSqrtPow === 2 ? '' : `^${this.functionFourthSqrtPow}`}\\sqrt{x^${this.functionFourthPow}+${this.functionFourthValueFirst}}`,
    //     5: `\\frac{x${this.functionFourthPow-1 === 1 ? '' : `^${this.functionFourthPow-1}`}}{\\sqrt{x^${this.functionFourthPow}+${this.functionFourthValueFirst}}}`,
    //     6: `(${math.derivative(`x^${this.functionSixthPow} + ${this.functionFourthValueFirst}*x^${this.functionSixthPow-1} + ${this.functionSixthValueFirst}`, 'x').toString()})*${this.getGeometricNormal[this.functionSixthGeometricType]}(x^${this.functionSixthPow}+${this.functionFourthValueFirst === 1 || this.functionFourthValueFirst === -1 ? `${this.functionFourthValueFirst}`.replace('1','') : this.functionFourthValueFirst}x${this.functionSixthPow-1 === 1 ? '' : `^${this.functionSixthPow-1}`}+${this.functionSixthValueFirst})`,
    //     7: `\\frac{${this.functionSeventhValueFirst === 1 || this.functionSeventhValueFirst === -1 ? `${this.functionSeventhValueFirst}`.replace('1','') : this.functionSeventhValueFirst}x+${this.functionSeventhValueSecond}}{${this.functionSeventhValueThird === 1 || this.functionSeventhValueThird === -1 ? `${this.functionSeventhValueThird}`.replace('1','') : this.functionSeventhValueThird}x+${this.functionSeventhValueFourth}}`,
    //     8: `x^${this.functionEightValuePow}${this.getGeometricNormalNew[this.functionEightGeometricType]}(x)`,
    // });

    // generateFunctionDomain = (): DomainType  => ({
    //     1: [1, Infinity],
    //     2: [1, Infinity],
    //     3: [1, Infinity],
    //     4: [math.parse(`(${Math.abs(this.functionFourthValueFirst)})^(1/${this.functionFourthPow})`).compile().evaluate({}), Infinity],
    //     5: [math.parse(`(${Math.abs(this.functionFourthValueFirst)})^(1/${this.functionFourthPow})`).compile().evaluate({}), Infinity],
    //     6: [1, Infinity],
    //     7: [math.parse(`(-1 * ${this.functionSeventhValueFourth})/(${this.functionSeventhValueThird})`).compile().evaluate({}), Infinity],
    //     8: [1, Infinity],
    // });
}


export const generateExpression = (): { mathjax: string; main: string; } => {
    const expression = new Expression();
    const A1 = randomInteger(1,8);
    const A2 = randomInteger(1,8);
    return A1 === A2 ? generateExpression() : {
        main :`${expression.getExpression()[A1]}+${expression.getExpression()[A2]}`.replaceAll('+-','-'),
        mathjax: `\\int_a^b${expression.getExpressionForMathjax()[A1]}+${expression.getExpressionForMathjax()[A2]}`.replaceAll('+-','-').replaceAll('1x','x').replaceAll('1e','e').replaceAll('x^{1}','x')
    };
};