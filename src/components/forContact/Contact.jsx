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
      <div className="relative w-[450px] p-6 bg-gray-800 bg-opacity-30 backdrop-blur-lg text-white rounded-2xl shadow-lg z-50">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          <IoClose />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex items-center gap-2 text-lg">
              <FaUser /> Sizning ismingiz
            </label>
            <input
              type="text"
              placeholder="Shu yerga yozing"
              className="w-full mt-2 p-2 bg-gray-700 bg-opacity-50 rounded-lg outline-none text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2 text-lg">
              <FaPhone /> Telefon raqamingiz
            </label>
            <input
              type="tel"
              placeholder="Shu yerga yozing"
              className="w-full mt-2 p-2 bg-gray-700 bg-opacity-50 rounded-lg outline-none text-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Buyurtma qoldirish
          </button>
        </form>
      </div>
    </div>
  );
}
