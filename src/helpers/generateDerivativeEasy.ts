import {randomInteger} from "./helpers";

type GeometricType = {
    [key: number]: string
}

type LogType = {
    [key: number | string]: string
}

class Expression {
    p = [2,3,'e',10];
    pow = [2,3,'e',5];
    functionValueFirst: number;
    functionValueSecond: number;
    functionValueThird: number;
    logValue: number;
    logBasis: number | string;
    powerFunctionType: number | string;
    powerFunctionValue: number;
    geometricType: number;
    geometricValue: number;

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

    logTypes: LogType = {
        2: 'log_{2}',
        3: 'log_{3}',
        e: 'ln',
        10: 'lg',
    };

    constructor() {
        this.functionValueFirst = randomInteger(-2, 4);
        this.functionValueSecond = randomInteger(2, 4);
        this.functionValueThird = randomInteger(-3, 4);
        this.logValue = randomInteger(2,5);
        this.logBasis = this.p[randomInteger(0,3, true)];
        this.powerFunctionType = this.pow[randomInteger(0,3, true)];
        this.powerFunctionValue = randomInteger(-2,4);
        this.geometricType = randomInteger(1,4);
        this.geometricValue = randomInteger(-2,4);
    }

    getExpression = (): GeometricType  => ({
        1: `${this.functionValueFirst}*x^${this.functionValueSecond}+${this.functionValueThird}`,
        2: `log(${this.logValue}*x,${this.logBasis})`,
        3: `${this.powerFunctionType}^(${this.powerFunctionValue}*x)`,
        4: `${this.getGeometricType[this.geometricType]}(${this.geometricValue}*x)`,
    });

    getExpressionForMathjax = (): GeometricType  => ({
        1: `${this.functionValueFirst}x^{${this.functionValueSecond}}+`.replaceAll('1','') + `${this.functionValueThird}`,
        2: `${this.logTypes[this.logBasis]}(${this.logValue}x)`.replaceAll('1',''),
        3: `${this.powerFunctionType}^{${this.powerFunctionValue}x}`.replaceAll('1',''),
        4: `${this.getGeometricNormal[this.geometricType]}(${this.geometricValue}x)`.replaceAll('1',''),
    });
}


export const generateExpression = (): {main: string, mathjax: string} => {
    const expression = new Expression();
    const A1 = randomInteger(1,4);
    const A2 = randomInteger(1,4);
    return A1 === A2 ? generateExpression() : {
        main :`${expression.getExpression()[A1]}+${expression.getExpression()[A2]}`.replaceAll('+-','-'),
        mathjax: `${expression.getExpressionForMathjax()[A1]}+${expression.getExpressionForMathjax()[A2]}`.replaceAll('+-','-')
    };
};