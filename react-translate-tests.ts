import * as React from 'react';
import {TranslatorProvider, Translations, useTranslate} from 'react-translate';

const test = () => {
    const trans: Translations = {
        locale: "en-us",
        Home: {
            HelloWorld: "Hello, World!",
            ParamsTest: "Have {{count}} params"
        }
    };
    const providerFactory = React.createFactory(TranslatorProvider);
    const root = providerFactory({translations: trans});

    const t = useTranslate("Home");
    t("HelloWorld");
    t("ParamsTest", {count: 2});
};
test();
