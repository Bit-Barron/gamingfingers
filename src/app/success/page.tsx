"use client";

import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import axios from "axios";
import { Lilita_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface pageProps {}

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const getLocalStorage = () => {
  let item = localStorage.getItem("customer");
  if (item) {
    return JSON.parse(localStorage.getItem("customer") || "[]");
  } else {
    return [];
  }
};


const getCart = () => {
  let item = localStorage.getItem("cart");
  if (item) {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } else {
    return [];
  }
};


const Page: React.FC<pageProps> = ({}) => {
  const router = useRouter();

  const [cart, setCart] = useState(getLocalStorage());
  const [variation, setVariation] = useState(308);
  const [customer, setCustomer] = useState<any[]>(getCart());


  useEffect(() => {
    const getItem = () => {
      if (!localStorage.getItem("customer")) {
        router.push("/");
      }
      const parsedItem = JSON.parse(localStorage.getItem("customer") || "[]");

      setCart(parsedItem);
    };
    getItem();
  }, [router]);

  useEffect(() => {
    const getItem = () => {
      if (!localStorage.getItem("cart")) {
        router.push("/");
      }
      const parsedItem = JSON.parse(localStorage.getItem("cart") || "[]");

      setCart(parsedItem);
    };
    getItem();
  }, [router]);

  useEffect(() => {
    const woocomerce = async () => {
      // console.log(cart)
      // if (customer.color === "blue") {
      //   setVariation(306);
      // } else if (customer.color === "red") {
      //   setVariation(308);
      // } else if (customer.color === "purple") {
      //   setVariation(307);
      // }

      console.log(variation)

      const data = {
        payment_method: "paypal",
        payment_method_title: "paypal",
        set_paid: true,
        billing: {
          first_name: `${cart.firstName}`,
          last_name: `${cart.lastName}`,
          address_1: `${cart.straße}`,
          address_2: "",
          city: `${cart.stadt}`,
          state: `${cart.region}`,
          postcode: `${cart.postleitzahl}`,
          country: `${cart.bundesland}`,
          email: `${cart.email}`,
          phone: `${cart.telefon}`,
        },
        shipping: {
          first_name: `${cart.firstName}`,
          last_name: `${cart.lastName}`,
          address_1: `${cart.straße}`,
          address_2: "",
          city: `${cart.stadt}`,
          state: `${cart.region}`,
          postcode: `${cart.postleitzahl}`,
          country: `${cart.bundesland}`,
        },
        line_items: [
          {
            product_id: 133,
            quantity: cart.quanity as number,
          },
          {
            product_id: 133,
            variation_id: variation,
            quantity: cart.quanity as number,
          },
        ],
        shipping_lines: [
          {
            method_id: "paypal",
            method_title: "paypal",
            total: "0",
          },
        ],
      };
      {
        await axios.post(
          `https://gamingfingers.de/wp-json/wc/v3/orders?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`,
          {
            ...data,
          }
        );
      }
      // localStorage.removeItem("customer");
    };
    woocomerce();
  }, [cart, cart.bundesland, cart.color, cart.email, cart.firstName, cart.lastName, cart.postleitzahl, cart.quanity, cart.region, cart.stadt, cart.straße, cart.telefon, variation]);
  return (
    <div className={`bg-white text-black ${lilita_one.className}`}>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl text-center">
          Sie haben erfolgreich bestellt. Vielen Dank! Ihre Bestellung wird in
          Kürze bearbeitet.
        </h1>
        <button
          className="mt-4 w-96 flex items-center justify-center rounded bg-primary text-white bg-black px-2 py-2 font-bold hover:bg-secondary"
          onClick={() => router.push("/products/")}
        >
          zurück
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
