import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

const func = (mainFunc: string, x: number) => {
    return math.parse(mainFunc).compile().evaluate({x});
};

export const newtonLeibnizMethod = (mainFunc: string, startPoint: number, endPoint: number) => {
    const ya = func(mainFunc, startPoint);
    const yb = func(mainFunc, endPoint);
    return math.parse(`${yb} - ${ya}`).compile().evaluate();
};