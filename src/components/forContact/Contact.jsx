import { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function OrderForm({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyurtma berildi:", { name, phone });
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
              <FaUser /> Sizning ismingiz
            </label>
            <input
              type="text"
              placeholder="Shu yerga yozing"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400 border-b border-gray-500 pb-2 focus:border-b-yellow-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center gap-2 text-lg mb-2">
              <FaPhone /> Telefon raqamingiz
            </label>
            <input
              type="tel"
              placeholder="Shu yerga yozing"
              className="w-full bg-transparent outline-none text-white placeholder-gray-400 border-b border-gray-500 pb-2 focus:border-b-yellow-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Buyurtma qoldirish
          </button>
        </form>
      </div>
    </div>
  );
}
