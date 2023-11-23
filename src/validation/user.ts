import {string, ref} from "yup";
import {ERROR_MESSAGES, SYMBOLS_IN_FIELDS} from "../constants/errorMessages";
import {REGEX} from "../constants/regEx";

export default {
    email: string().email(ERROR_MESSAGES.INVALID_EMAIL).required(ERROR_MESSAGES.REQUIRED),
    password: string().min(SYMBOLS_IN_FIELDS.MIN_SYMBOLS_IN_PASSWORD, ERROR_MESSAGES.MIN_SYMBOLS)
        .matches(REGEX.MINIMUM_ONE_NUMBER, ERROR_MESSAGES.MIN_NUMBERS)
        .matches(REGEX.MINIMUM_ONE_LOWERCASE, ERROR_MESSAGES.LOWER_CASE_LETTER)
        .matches(REGEX.MINIMUM_ONE_UPPERCASE, ERROR_MESSAGES.ONE_UPPERCASE_LETTER)
        .test('empty-check', ERROR_MESSAGES.MIN_SYMBOLS, password => !!password),
    firstLastName: string().matches(REGEX.ONLY_LATIN_LETTERS, ERROR_MESSAGES.LATIN_LETTER).required(ERROR_MESSAGES.REQUIRED).required(ERROR_MESSAGES.REQUIRED),
    phone: string().matches(REGEX.PHONE, ERROR_MESSAGES.INVALID_PHONE).required(ERROR_MESSAGES.REQUIRED),
    passwordConfirmation: string()
        .oneOf([ref('password'), null], ERROR_MESSAGES.PASSWORD_MATCH).required(ERROR_MESSAGES.REQUIRED)
};