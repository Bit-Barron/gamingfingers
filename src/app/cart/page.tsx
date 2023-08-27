"use client";

import { Contact } from "@/components/elements/Contact";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { Promo } from "@/components/elements/Promo";
import { Table } from "@/components/elements/Table";
import { Alerts } from "@/components/utils/Alerts";
import { GeneralStore } from "@/store/GeneralStore";
import { Lilita_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

interface pageProps {}

interface Cart {
  quanity: number;
  color: string;
}

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

const Page: React.FC<pageProps> = ({}) => {
  const { alerts } = GeneralStore();
  const router = useRouter();
  const [cart, setCart] = useState<any[]>(getLocalStorage());

  useEffect(() => {
    const getItem = () => {
      const parsedItem: Cart[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      setCart(parsedItem);
    };
    getItem();
  }, []);

  const quantities = cart.map((item) => item.quantity);

  const totalbeforefixed = quantities.reduce((acc, curr) => acc + curr, 0) * 7.85;

  const total = totalbeforefixed.toFixed(1);


  return (
    <div>
      <Header />
      <div className="bg-[#1E004D] !text-white">
        {alerts.map((alert) => (
          <Alerts key={alert.id} />
        ))}

        <Table />
      </div>
      <div className="flex flex-col md:mx-auto md:container">
        <Promo />
        {cart.length == 0 ? (
          <div></div>
        ) : (
          <>
            <div className=" md:flex md:justify-end mt-10 md:flex-col items-end">
              <h1
                className={`text-white ${lilita_one.className} text-4xl mt-10 flex justify-start items-center ml-4 md:mr-[340px]`}
              >
                GESAMT
              </h1>
              <div className="mt-4 ml-32pl-6">
                <dl className="border-gray-200 py-6 md:w-[500px] px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt
                      className={`${lilita_one.className} text-lg text-white`}
                    >
                      Zwischensumme
                    </dt>
                    <dd
                      className={`${lilita_one.className} text-sm font-medium text-white`}
                    >
                      {total} €
                    </dd>
                  </div>
                  <div className="flex items-center border-t justify-between">
                    <dt
                      className={`${lilita_one.className} text-lg mt-4 text-white`}
                    >
                      Gaming Finger Sleeves x {quantities.length}
                    </dt>
                    <dd
                      className={`${lilita_one.className} mt-4 text-sm font-medium text-white`}
                    >
                      {total} €
                    </dd>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt
                      className={`${lilita_one.className} text-xl font-medium text-white`}
                    >
                      Gesammt
                    </dt>
                    <dd
                      className={`${lilita_one.className} text-base font-medium text-white`}
                    >
                      {total} €
                    </dd>
                  </div>
                </dl>

                <div className="mt-10 mb-10 p-2 flex md:justify-end">
                  <button
                    onClick={() => router.push("/checkout/")}
                    type="button"
                    className={`border-2 rounded-lg text-white p-3 w-full text-lg md:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
                  >
                    Jetzt Kaufen
                  </button>
                </div>
                <div
                  onClick={() => router.push("/products/")}
                  className={`${lilita_one.className} mt-6 text-xl flex text-[#6E0DA8] hover:underline`}
                >
                  <MdKeyboardBackspace className="mr-2 text-2xl mt-1 text-[#6E0DA8]" />
                  zurück
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="md:mt-32">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
