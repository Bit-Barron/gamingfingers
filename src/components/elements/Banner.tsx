import { Lilita_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import BannerImage from "../../../public/images/banner.png";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BannerImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-opacity-60 p-4 md:p-12 lg:p-32 flex-col text-white font-bold flex justify-center items-center">
        <h1
          className={`${lilita_one.className} text-3xl md:text-4xl lg:text-5xl text-center text-white mb-2`}
        >
          Play Like a Pro!!
        </h1>

        <div
          className={`${lilita_one.className} md:text-2xl text-xl text-white md:text-white text-center mb-4`}
        >
          Bist du bereit, deine Spielfähigkeiten auf die nächste Stufe zu heben?
        </div>
        <button
          className={`border-2 rounded-lg p-3 md:p-4 w-40 md:w-52 lg:w-64 text-base md:text-lg lg:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
          onClick={() => alert("for buying go gamingfingers.de")}
        >
          Hier bestellen
        </button>
      </div>
    </div>
  );
};
