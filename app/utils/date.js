const hijriMoment = require('moment-hijri');
const enLocale = require('moment/locale/en-gb');
const faLocale = require('moment/locale/fa');
const arLocale = require('moment/locale/ar-sa');

export function setLocale(moment, locale) {
  switch (locale) {
    case 'en-gb':
      moment.locale(locale, enLocale);
      break;
    case 'fa':
      moment.locale(locale, faLocale);
      break;
    case 'ar-sa':
      moment.locale(locale, arLocale);
      break;
    default:
      moment.locale(locale, enLocale);
      break;
  }
  return moment;
}

function hijri(format, language, strict, input) {
  return setLocale(hijriMoment(format, language, strict, input), 'en-gb');
}

export function hijriToGregorian(format, language, strict, input) {
  const date = hijri(format, language, strict, input);

  if (Number(date.format('iMM')) % 2 === 0 && Number(date.format('iDD')) !== Number(30)) {
    date.add(1, 'days');
  }
  return date;
}

export function gregorianToHijri(format, language, strict, input) {
  const date = hijri(format, language, strict, input);
  if (Number(date.format('iMM')) % 2 === 0 && Number(date.format('iDD')) !== Number(30)) {
    date.subtract(1, 'days');
  }
  return date;
}


export function formatDate(date) {
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  return `${date.getFullYear()}-${month}-${day}`;
}
