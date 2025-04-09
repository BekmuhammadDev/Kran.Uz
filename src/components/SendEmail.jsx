// emailService.js
import emailjs from "@emailjs/browser";
import { t } from "i18next";

export const sendCustomEmail = async (name, number) => {
  try {
    const defaultMessage =
      "Xush kelibsiz! Sizning so‘rovingiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.";
    const fullMessage = `${defaultMessage}\n\nTelefon raqami: ${number}`;
    const currentTime = new Date().toLocaleString();

    const result = await emailjs.send(
      "service_xbqpo6d", // SERVICE ID
      "template_3w2sdan", // TEMPLATE ID
      {
        name, // {{name}}
        message: fullMessage, // {{message}} ← template’da shu joyga chiqadi
        title: "Yangi so‘rov", // {{title}} ← email subject
        time: currentTime, // {{time}} ← template’dagi vaqt
        number, // {{number}} ← agar ishlatilgan bo‘lsa
      },
      "d1IxGTYTA6CR9GRkk" // PUBLIC KEY
    );

    return { success: true, message: t("greenAlertedSend") };
  } catch (error) {
    return { success: false, message: t("redAlertedSend") };
  }
};
