import i18next from 'i18next'
import { initReactI18next } from "react-i18next";

import de from './de'
import en from './en'
// import mask from './mask'

i18next
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('currentLanguage') || 'en', // if you're using a language detector, do not define the lng option
    debug: false,
    resources: {
      de: { translation: de },
      en: { translation: en },
      // mask: { translation: mask }
    }
  });

export default i18next
