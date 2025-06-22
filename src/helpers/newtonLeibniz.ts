import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

const func = (mainFunc: string, x: number) => {
    return math.parse(mainFunc).compile().evaluate({x});
};

export const newtonLeibnizMethod = (mainFunc: string, startPoint: number, endPoint: number) => {
    const ya = func(mainFunc, startPoint);
    const yb = func(mainFunc, endPoint);
    const realA = ya.im !== undefined ? ya.im : ya;
    const realB = yb.im !== undefined ? yb.im : yb;
    return math.parse(`${realB} - ${realA}`).compile().evaluate();
};