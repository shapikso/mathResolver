
export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;
export const toJson = (obj: object) => JSON.stringify(obj);
export const fromJson = (json: string) => JSON.parse(json);

export const getFirstLastName = (displayName: string) => (displayName).split(' ');

export const randomInteger = (min: number, max: number, withZero = false): number => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    const result = Math.round(rand);
    return !withZero && result === 0 ? randomInteger(min,max) : result;
};

export const randomIntegerExclude = (min: number, max: number, excludedNumber: number[]): number => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    const result = Math.round(rand);
    return excludedNumber.includes(result) ? randomIntegerExclude(min,max, excludedNumber) : result;
};