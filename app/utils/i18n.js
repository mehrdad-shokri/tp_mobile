import i18n from 'i18n-js';

export default (locales) => {
    console.log('running1');
    i18n.defaultLocale = 'en';
    i18n.locale = 'en';
    i18n.fallbacks = true;
    i18n.translations = locales;
    return i18n;
}
