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

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  straße: string;
  bundesland: string;
  postleitzahl: string;
  telefon: string;
  region: string;
  stadt: string;
  notes?: string;
  paymentMethod: string;
}

interface Cart {
  quantity: number;
  color: string;
  price: number;
  product: string;
}

const Page: React.FC<pageProps> = ({}) => {
  const router = useRouter();
  const [customer, setCustomer] = useState<Customer>(getLocalStorage());
  const [cart, setCart] = useState<Cart[]>(getCart());
  const [variation, setVariation] = useState(1);

  useEffect(() => {
    const getItem = () => {
      if (!localStorage.getItem("customer")) {
        router.push("/");
      }
      const parsedItem = JSON.parse(localStorage.getItem("customer") || "[]");

      setCustomer(parsedItem);
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

  const quantity = cart.map((item) => item.quantity);
  const totalQuantity = quantity.reduce((a, b) => a + b, 0);

  useEffect(() => {
    const woocomerce = async () => {
      const colorToVariationIdMap = {
        blue: 306,
        red: 307,
        purple: 308,
      };
      const lineItems = cart.map((item) => {
        const variationId =
          colorToVariationIdMap[
            item.color as keyof typeof colorToVariationIdMap
          ];
        return {
          product_id: 133,
          variation_id: variationId,
          quantity: item.quantity,
        };
      });
      const data = {
        payment_method: customer.paymentMethod,
        payment_method_title: `${customer.paymentMethod}`,
        set_paid: true,
        billing: {
          first_name: `${customer.firstName}`,
          last_name: `${customer.lastName}`,
          address_1: `${customer.straße}`,
          address_2: "",
          city: `${customer.stadt}`,
          state: `${customer.region}`,
          postcode: `${customer.postleitzahl}`,
          country: `${customer.bundesland}`,
          email: `${customer.email}`,
          phone: `${customer.telefon}`,
        },
        shipping: {
          first_name: `${customer.firstName}`,
          last_name: `${customer.lastName}`,
          address_1: `${customer.straße}`,
          address_2: "",
          city: `${customer.stadt}`,
          state: `${customer.region}`,
          postcode: `${customer.postleitzahl}`,
          country: `${customer.bundesland}`,
        },
        line_items: lineItems,
        shipping_lines: [
          {
            method_id: `${customer.paymentMethod}`,
            method_title: `${customer.paymentMethod}`,
            total: "7.85",
          },
        ],
        customer_note: `${customer.notes}`,
      };
      {
        await axios.post(
          `https://gamingfingers.de/wp-json/wc/v3/orders?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`,
          {
            ...data,
          }
        );
      }
      localStorage.removeItem("customer");
    };
    woocomerce();
  }, [
    cart,
    customer.bundesland,
    customer.email,
    customer.firstName,
    customer.lastName,
    customer.notes,
    customer.paymentMethod,
    customer.postleitzahl,
    customer.region,
    customer.stadt,
    customer.straße,
    customer.telefon,
    totalQuantity,
    variation,
  ]);
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
