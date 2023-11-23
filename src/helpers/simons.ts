import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

const func = (mainFunc: string, x: number) => {
    return math.parse(mainFunc).compile().evaluate({x});
};

export const simpsonMethod = (startPoint: number, endPoint: number, mainFunc: string) => {
    const n = 100;
    const h = (endPoint - startPoint) / n;
    let sum = func(mainFunc, startPoint) + func(mainFunc, endPoint);

    for (let i = 1; i < n; i++) {
        const x = startPoint + i * h;
        if (i % 2 === 0) {
            sum += 2 * func(mainFunc, x);
        } else {
            sum += 4 * func(mainFunc, x);
        }
    }

    return (h / 3) * sum;
};
