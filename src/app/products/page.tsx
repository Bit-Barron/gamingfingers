"use client";

import { Product } from "@/@types/interface";
import { Contact } from "@/components/elements/Contact";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { Alerts } from "@/components/utils/Alerts";
import { GeneralStore } from "@/store/GeneralStore";
import { uid } from "@/utils/clientHelper";
import axios from "axios";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/product2.png";
import product4 from "../../../public/images/product4.png";
import product5 from "../../../public/images/product5.png";

interface pageProps {}

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const Page: React.FC<pageProps> = ({}) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColorImage, setSelectedColorImage] = useState(product1);
  const { addAlert, alerts } = GeneralStore();
  const router = useRouter();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://gamingfingers.de/wp-json/wc/v3/products?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const addToCart = async () => {
    try {
      const newItem = {
        quantity: quantity,
        color: selectedColor,
        price: 7.85,
        product: `Gaming Finger Sleeve - ${selectedColor}`,
      };
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productArray = [...existingCart, newItem];

      localStorage.setItem("cart", JSON.stringify(productArray));
      addAlert({
        id: uid(),
        type: "success",
        message: "Produkt erfolgreich hinzugefügt",
      });
      if (selectedColor == "") {
        alert("Bitte wähle eine Farbe aus");
        return;
      }
      return router.push("/cart")
    } catch (error) {
      addAlert({
        id: uid(),
        type: "failure",
        message: "Produkt konnte nicht hinzugefügt werden",
      });
      // Handle error
    }
  };

  const imgs = [
    {
      id: 0,
      value: product2,
    },
    {
      id: 1,
      value: product1,
    },
    {
      id: 2,
      value: product4,
    },
    {
      id: 3,
      value: product5,
    },
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index: number) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <>
      <div className="bg-[#1E004D] !text-white ">
        <Header />
        {alerts.map((alert) => (
          <Alerts key={alert.id} />
        ))}
        <div className="container mx-auto p-4 flex flex-col md:flex-row md:mt-20">
          <div className="md:w-1/2 md:pr-4">
            <Image
              width={500}
              height={500}
              alt=""
              src={sliderData.value || product2}
            />
            <div className="flex mt-2 space-x-2">
              {imgs.map((img, i) => (
                <div className="" key={img.id}>
                  <Image
                    alt=""
                    height={100}
                    width={100}
                    src={img.value}
                    onClick={() => handleClick(i)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:px-4">
            <h1 className={`${lilita_one.className} text-4xl mb-2 mt-3`}>
              Gaming Finger Sleeve
            </h1>
            <h1
              className={`${lilita_one.className} text-2xl mb-4 text-green-600`}
            >
              7.85€
            </h1>
            <div className={`mb-4 ${lilita_one.className} text-xl mt-10`}>
              Color
            </div>
            <div className="flex space-x-2 mb-4">
              <button
                className={`rounded-full h-12 w-12 ${
                  selectedColor === "red"
                    ? "border-black border-4"
                    : "border-white border-2"
                } bg-red-700 focus:outline-none`}
                onClick={() => setSelectedColor("red")}
              ></button>
              <button
                className={`rounded-full h-12 w-12 ${
                  selectedColor === "blue"
                    ? "border-black border-4"
                    : "border-white border-2"
                } bg-blue-500 focus:outline-none`}
                onClick={() => setSelectedColor("blue")}
              ></button>
              <button
                className={`rounded-full h-12 w-12 ${
                  selectedColor === "purple"
                    ? "border-black border-4"
                    : "border-white border-2"
                } bg-purple-500 focus:outline-none`}
                onClick={() => setSelectedColor("purple")}
              ></button>
            </div>
            <div
              className={`text-green-600 mb-4 ${lilita_one.className} text-xl`}
            >
              Vorrätig
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="rounded-full h-8 w-8 flex items-center justify-center focus:outline-none"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className={`${lilita_one.className} text-xl`}>
                {quantity}
              </span>
              <button
                className="rounded-full h-8 w-8 flex items-center justify-center focus:outline-none"
                onClick={increaseQuantity}
              >
                +
              </button>
              <div>
                {selectedColor === "" && (
                  <p className={`${lilita_one.className} text-red-700`}>
                    bitte wähle eine farbe aus
                  </p>
                )}
                <button
                  className={`border-2 rounded-lg p-3 text-white w-32 text-lg md:text-xl mt-2 bg-[#442873] ${
                    lilita_one.className
                  } ${selectedColor === "" && "disabled:opacity-95"}`}
                  onClick={() => selectedColor !== "" && addToCart()}
                >
                  Hinzufügen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-[250px]">
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default Page;
