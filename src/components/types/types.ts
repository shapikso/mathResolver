import React, {ChangeEvent} from "react";

export enum buttonColor {
    transparentPrimary='transparentPrimary',
    primary = 'primary',
    transparentError= 'transparentError',
    transparentRole= 'transparentRole',
    transparent= 'transparent',
    facebook= 'facebook'
}
export enum buttonSize {
    small='small',
    medium='medium',
    large='large',
    extraLarge='extraLarge',
    header='header',
    aboveMedium='aboveMedium',
}

export enum inputSize {
    medium = 'medium',
    large = 'large',
    noMaxLength = 'noMaxLength'
}

export interface LocalUser {
    uid: string,
    firstName: string,
    lastName: string,
}
export interface User extends LocalUser {
    phoneNumber?: string | null,
    email?: string | null,
    authProvider: string
}

export interface InputProps {
    size?: inputSize,
    type?: string,
    placeholder?: string,
    name?: string,
    id?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>)=> void,
    onBlur?: (e: ChangeEvent)=> void,
    value?: string,
    error?: boolean,
    iconRight?: boolean,
    iconLeft?: boolean,
    icon?: React.ReactNode,
    disabled?: boolean,
    readOnly?: boolean,
    maxLength?: number,
}
export interface BoardInfo {
    createdBy?: string,
    createdByName?: string
    title: string,
    description: string,
    members?: string[],
    image?: string,
}

export interface SingleBoardTypes extends BoardInfo {
    id:  string
}

export interface ImageData {
    name: string,
    url: string
}
export interface FirebaseErrors {
    [key: string]: string
}