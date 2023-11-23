import { FirebaseErrors } from "../components/types/types";

export const SYMBOLS_IN_FIELDS = {
    MIN_SYMBOLS_IN_PASSWORD: 8,
    MIN_NUMBERS_IN: 1,
    MIN_SYMBOLS_IN: 1,
    MAX_SYMBOLS_IN_TITLE: 50,
    MAX_SYMBOLS_IN_DESCRIPTION: 1000,
    MAX_SYMBOLS_IN_PRICE: 10,
    MAX_SYMBOLS_IN_EMAIL: 129,

};
export const ERROR_MESSAGES = {
    DEFAULT: 'Something went wrong 🤷🏻 🤷🏻‍♂️',
    UPPERCASE_LETTER: 'Starts with uppercase letter',
    MIN_SYMBOLS: `Min ${SYMBOLS_IN_FIELDS.MIN_SYMBOLS_IN_PASSWORD} symbols`,
    MAX_SYMBOLS_TITLE: `Max ${SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_TITLE} symbols`,
    MAX_SYMBOLS_DESCRIPTION: `Max ${SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_DESCRIPTION} symbols`,
    MIN_NUMBERS: `Min ${SYMBOLS_IN_FIELDS.MIN_NUMBERS_IN} number`,
    LOWER_CASE_LETTER: 'Min one lowercase letter',
    LATIN_LETTER: 'Only latin letters',
    ONLY_NUMBERS: 'Only numbers',
    MIN_CHARACTERS: 'Min two characters',
    LATIN_LETTER_AND_NUMBERS: 'Only latin letters and numbers',
    START_WITH_LETTER: 'Starts with letter',
    ONE_UPPERCASE_LETTER: 'Min one uppercase letter',
    INVALID_EMAIL: 'Invalid email address',
    INVALID_PHONE: 'Invalid phone number',
    REQUIRED: 'Required',
    WRONG_TYPE: 'Wrong file type',
    PASSWORD_MATCH: 'Passwords must match',
    EMAIL_ALREADY_IN_USE: 'User with such email has been already registered. You can login by email and password.',
    EMAIL_PASSWORD_WRONG: 'Email or password are wrong.'
};

export const FIREBASE_ERRORS : FirebaseErrors= {
    'auth/email-already-in-use': 'User with such email has been already registered. You can login by email and password',
    'auth/wrong-password': 'Email or password are wrong.',
    'auth/user-not-found': 'Email or password are wrong.',
};
