export const convertToUaFormulas = (formula: string) => {
    return formula.replaceAll('tg', 'tan').replaceAll('ctg', 'cot');
};