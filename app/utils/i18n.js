import i18n from 'i18n-js';

export default (locales) => {
    console.log('running1');
    i18n.defaultLocale = 'fa';
    i18n.locale = 'fa';
    i18n.fallbacks = true;
    i18n.translations = locales;
    return i18n;
}
