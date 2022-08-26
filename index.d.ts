// Type definitions for react-translate 7.0.1
// Project: https://github.com/bloodyowl/react-translate
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Component, ComponentType} from 'react';

export interface Translations extends Record<string, any>{
    locale: string
}

export interface TranslatorProviderProps {
    translations: Translations;
}

export interface LegacyTranslateProps {
    t: (key: string, params?: object) => string;
}

export class TranslatorProvider extends Component<TranslatorProviderProps> {}

export function useTranslate(namespace: string): ((key: string, params?: object) => string);

export function translate(displayName: string): ComponentType<LegacyTranslateProps>;

export {};
