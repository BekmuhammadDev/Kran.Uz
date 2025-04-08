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
          name: "Sizning ismingiz",
          write_here: "Shu yerga yozing",
          place_an_order: "Buyurtma qoldirish",
          contact_us: "Biz bilan bog'lanish",
          adreess: "Bizning manzil",
          yunusobod: "Yunusobod",
          toshkent: "Toshkent",
          Ozbekiston: "O'zbekiston",
          email_address: "Elektron pochta manzil",
          phone: "Telefon",
          until_campaign: "Aksiya tugashiga: ",
          textabout1: "Biz 2015-yildan buyon aholiga sifatli va ishonchli xizmat ko‘rsatib kelmoqdamiz. Shu kungacha ko‘plab yirik brendlar bilan hamkorlik qilib, mijozlarimizga eng samarali va qulay transport xizmatlarini taqdim etmoqdamiz. Tajribamiz va ishonchli texnikalarimiz bilan har qanday yuk tashish, qurilish hamda maxsus texnika buyurtmalarini tez va sifatli bajarishga kafolat beramiz.",
          our_partners:"Hamkorlarimiz",
          contacts:"Kontaktlar",
          links:"Linklar",
          media:"Medialar",
          cargo_capacity:"Yuk sig'imi",
          weight:"O'girligi",
          partners:"Hamkorlar",
          address:"Manzil",
        }
      },
      ru: {
        translation: {
          about: "О нас",
          contact: "Контакты",
          techniques: "Техника",
          techniqueses: "Техники",
          phone_number: "Номер Телефона",
          name: "Ваше имя",
          write_here: "Напишите здесь",
          place_an_order: "Оформить заказ",
          contact_us: "связаться с нами",
          adreess: "Наш адрес",
          yunusobod: "Юнусабад",
          toshkent: "Ташкент",
          Ozbekiston: "Узбекистан",
          email_address: "Адрес электронной почты",
          phone: "Телефон",
          until_campaign: "До окончание акции:",
          textabout1:"Мы предоставляем качественные и надежные услуги населению с 2015 года.Мы идем. На сегодняшний день сотрудничество со многими крупными брендамипредоставление нашим клиентам наиболее эффективных и удобных транспортных услугМы представляем. Благодаря нашему опыту и надежным технологиям, каждыйкак быстро оформить заказ на грузоперевозки, строительную и спецтехникуи мы гарантируем качественное исполнение.",
          our_partners:"Наши партнеры",
          contacts:"Контакты",
          links:"ссылки",
          media:"медиа",
          cargo_capacity:"Грузоподъемность",
          weight:"Масса",
          partners:"Партнеры",
          address:"Адрес",

        }
      }
    }
  });

export default i18n;
