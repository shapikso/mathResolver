import {create, all} from 'mathjs';

const config = { };
const math = create(all, config);

//const result = calculateConversion({"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"});
const findY = (mainExpression:string,expression: string, dx: number, x: number) => {
    const withDeltaXPlus = mainExpression.replaceAll('x','(x+dx)');
    const withDeltaXMinus = mainExpression.replaceAll('x','(x-dx)');
    const y1 = math.parse(`${withDeltaXPlus}`).compile().evaluate({x,dx});
    const y2 = math.parse(`${withDeltaXMinus}`).compile().evaluate({x,dx});
    // console.log(y2);
    // console.log();
    //console.log('y1-y2',y1-y2);
    return math.parse(`(${y1}-${y2})/(2*${dx})`).compile().evaluate({x,dx});
};
const findX = (expression: string, x: number) => {
    return math.parse(expression).compile().evaluate({x});
};

const findEuclideanDistance = (xi: number[], yi: number[], x: number[]) => {
    const distance =  x.reduce((acc, currentX, index) => {
        return acc + math.evaluate(`((${xi[index]-yi[index]})/${yi[index]})^2`);
    },0);
    //console.log(distance);
    return Math.sqrt(distance);
};

export const isResultRight = (mainExpression: string,result: string,dx: number,x: number[]) => {
    const xi = x.map((currentX) => findX(result,currentX));
    const yi = x.map((currentX) => findY(mainExpression,result, dx, currentX));
    // console.log('xi: ', xi);
    // console.log('yi: ', yi);
    const res = findEuclideanDistance(xi,yi,x)/xi.length;
    //console.log(res);
    // const res1 = math.parse(`log(10,e)`).compile().evaluate();
    // console.log(res1);

    return res <= 0.005;
};