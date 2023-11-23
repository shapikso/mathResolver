export const REGEX = {
    PHONE: /^\+?[1-9]\d{8,14}$/,
    MINIMUM_ONE_NUMBER: /(?=.*[0-9])/g,
    MINIMUM_ONE_LOWERCASE: /(?=.*[a-z])/g,
    MINIMUM_ONE_UPPERCASE: /(?=.*[A-Z])/g,
    ONLY_LATIN_LETTERS: /^[a-zA-Z]+$/,
    ONLY_NUMBERS: /^[0-9]+$/,
};