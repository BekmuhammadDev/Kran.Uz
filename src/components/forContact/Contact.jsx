import { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { sendCustomEmail } from "../SendEmail";
import { useTranslation } from "react-i18next"; // emailJS ga xizmat qilish uchun

export default function OrderForm({ onClose }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState(""); // Yangi state qo'shildi

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formaning default yuborish jarayonini to'xtatish

    if (!name || !number) {
      setMessage("Iltimos, barcha maydonlarni to‘ldiring."); // Habarni set qilish
      setTimeout(() => {
        setMessage(""); // 3 sekunddan keyin xabarni tozalash
      }, 3000);
      return;
    }

    const response = await sendCustomEmail(name, number);
    setMessage(response.message); // Habarni set qilish

    // Xabarni 3 sekunddan keyin o'chirish
    setTimeout(() => {
      setMessage("");
    }, 3000);

    // Inputlarni tozalash
    if (response.success) {
      setName("");
      setNumber("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative w-[450px] p-6 bg-[#191919] text-white rounded-2xl shadow-lg z-50">
        <button onClick={onClose} className="absolute top-3 right-3 text-2xl">
          <IoClose />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="flex items-center gap-2 text-lg mb-2">
              <FaUser /> {t("name")}
            </label>
            <input
              type="text"
              placeholder={t("write_here")}
              className="bg-transparent text-gray-300 focus:outline-none w-full"
              pattern="[A-Za-z\u0400-\u04FF\s]+"
              inputMode="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value.replace(/[^A-Za-z\u0400-\u04FF\s]/g, ""))
              }
              maxLength={20}
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center gap-2 text-lg mb-2">
              <FaPhone /> {t("phone_number")}
            </label>
            <input
              type="tel"
              placeholder="+998 (99) 999 99 99"
              className="bg-transparent text-gray-300 focus:outline-none w-full"
              pattern="[0-9]+"
              inputMode="numeric"
              value={number}
              onChange={(e) => {
                // Raqam kiritishda +998 avtomatik qo'shilsin
                let input = e.target.value.replace(/[^0-9]/g, ""); // faqat raqamlarni qabul qilish
                if (!input.startsWith("998")) {
                  input = "998" + input; // +998 ni avtomatik qo'shish
                }
                setNumber(input);
              }}
              maxLength={12}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Buyurtma qoldirish
          </button>
        </form>

        {/* Habarni ko'rsatish */}
        {message && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div
              className={`text-center text-white rounded-lg p-6 max-w-[90%] md:max-w-[500px] ${
                message === "Xabar yuborildi!"
                  ? "bg-[#28a745]" // Yashil rang
                  : "bg-[#FF4C4C]" // Qizil rang
              }`}
            >
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
