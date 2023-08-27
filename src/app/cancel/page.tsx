"use client";

import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { Lilita_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const router = useRouter();
  return (
    <div className={`bg-white text-black ${lilita_one.className}`}>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl text-center">
          Deine Bestellung wurde erfolgreich abgebrochen und nicht
          abgeschlossen!
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
