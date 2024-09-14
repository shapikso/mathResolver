import {create, all} from 'mathjs';
import {simpsonMethod} from "./simons";
import {newtonLeibnizMethod} from "./newtonLeibniz";

const config = { };
const math = create(all, config);

export const isResultRight = (mainFunc: string, resultFunc: string ,startPoint: number, endPoint: number,) => {
    const simpsonResult = simpsonMethod(startPoint, endPoint, mainFunc);
    console.log(startPoint, endPoint);

    const newtonLeibnizResult = newtonLeibnizMethod(resultFunc, startPoint, endPoint);
    console.log(simpsonResult, 'simson');
    console.log(newtonLeibnizResult, 'newtonLeibniz');
    const result = math.parse(`(${simpsonResult} - ${newtonLeibnizResult})/2`).compile().evaluate();
    return Math.abs(result) <= 0.001;
};