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
        translation: {
          about: "Biz Haqimizda",
          contact: "Bog'lanish",
          techniques: "Texnika",
          techniqueses: "Texnikalar",
          phone_number: "Telefon raqamingiz",
          name:"Sizning ismingiz",
          write_here:"Shu yerga yozing",
          place_an_order:"Buyurtma qoldirish",
          contact_us:"Biz bilan bog'lanish",
          adreess:"Bizning manzil",
          yunusobod:"Yunusobod",
          toshkent:"Toshkent",
          Ozbekiston:"O'zbekiston",
          email_address:"Elektron pochta manzil",
          phone:"Telefon",
          until_campaign:"Aksiya tugashiga",

        }
      },
      ru: {
        translation: {
          about: "О нас",
          contact: "Контакты",
          techniques: "техника",
          techniqueses: "техникаи",
          phone_number: "Номер телефона",
          name:"Ваше имя",
          write_here:"Напишите здесь",
          place_an_order:"Оформить заказ",
          contact_us:"связаться с нами",
          adreess:"Наш адрес",
          yunusobod:"Юнусабад",
          toshkent:"Ташкент",
          Ozbekiston:"Узбекистан",
          email_address:"Адрес электронной почты",
          phone:"Телефон",
          until_campaign:"До конца кампании",

        }
      }
    }
  });

export default i18n;
