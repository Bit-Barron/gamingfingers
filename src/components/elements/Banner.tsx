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
      <div className="relative z-10 bg-opacity-60 p-8 md:p-32 flex-col text-white font-bold flex justify-center items-center">
        <h1
          className={`${lilita_one.className} text-2xl md:text-4xl text-center `}
        >
          Play Like a Pro!
        </h1>

        <div
          className={`${lilita_one.className} text-2xl text-center text-white`}
        >
          Bist du bereit, deine Spielfähigkeiten auf die nächste Stufe zu heben?
        </div>
        <button
          className={`border-2 rounded-lg p-3 w-52 md:w-52 text-lg md:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
          onClick={() => router.push("/products")}
        >
          Hier bestellen
        </button>
      </div>
    </div>
  );
};
