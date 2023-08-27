import { Lilita_One } from "next/font/google";
import React, { useEffect, useState } from "react";

interface PromoProps {}
const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});
const getLocalStorage = () => {
  let item = localStorage.getItem("cart");
  if (item) {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } else {
    return [];
  }
};

export const Promo: React.FC<PromoProps> = ({}) => {
  const [cart, setCart] = useState<any[]>(getLocalStorage());

  useEffect(() => {
    const getItem = () => {
      const parsedItem = JSON.parse(localStorage.getItem("cart") || "[]");

      setCart(parsedItem);
    };
    getItem();
  }, []);

  return (
    <div className="mx-auto container mt-10 md:flex space-x-4  space-y-4 flex p-2">
      {cart.length == 0 ? (
        <div></div>
      ) : (
        <>
          <input
            type="text"
            className={`bg-[#181A1B] w-60 h-16 mt-4  border text-white border-gray-300 text-whiteh-16 focus:ring-blue-500  focus:border-blue-500 block p-3 text-xl ${lilita_one.className}`}
            placeholder="Gutschein Anwenden"
            required
          />
          <button
            className={`border border-white p-3 md:w-60 w-60 h-16 text-lg md:text-xl text-white bg-[#442873] ${lilita_one.className}`}
          >
            ANWENDEN
          </button>
        </>
      )}
    </div>
  );
};
