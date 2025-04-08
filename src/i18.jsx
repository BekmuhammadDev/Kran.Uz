import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      uz: {
        translation:{
            about: "Biz Haqimizda",
            contact: "Bog'lanish",
            techniques:"",
        }
      },
      ru: {
        translation:{
            about: "О нас",
            contact: "Контакты",
             techniques:"",
            
        }
      }
    }
  });

export default i18n;
