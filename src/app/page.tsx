"use client";

import { Banner } from "@/components/elements/Banner";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { ProductBanner } from "@/components/elements/ProductBanner";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
import Image1 from "../../public/images/image1.png";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="bg-[#1E004D] !text-white">
      <Header />
      <Banner />
      <div className="container mx-auto">
        <h1
          className={`mt-3 font-bold text-xl md:text-xl lg:text-3xl text-white text-center ${lilita_one.className}`}
        >
          BIST DU BEREIT DEINE FÄHIGKEITEN IM SPIEL AUF DIE NÄCHSTE STUFE ZU
          BRINGEN?
        </h1>
      </div>

      <div className="">
        <div className="flex flex-col justify-center items-center mt-8 md:flex-row space-y-4 md:space-x-32 md:mt-10">
          <Image
            height={400}
            width={400}
            src={Image1}
            alt=""
            className="md:w-[450px] lg:h-[330px] w-[340px] md:mt-3"
          />
          <div className="p-5 md:h-[324px] md:w-[450px]">
            <h1
              className={`text-white text-xl md:text-3xl ${lilita_one.className}`}
            >
              ÜBERLEGENE LEISTUNG
            </h1>
            <ul
              className={`text-white  text-base w-[260px] md:text-xl list-disc space-y-4 m-5 ${lilita_one.className}`}
            >
              <li className="text-xl">
                Bis zu 30% mehr Genauigkeit und Kontrolle
              </li>
              <li className="text-xl">
                Präzise Bewegungen mit 120 Berührungspunkten pro cm2
              </li>
              <li className="text-xl">Funktioniert mit allen Geräten</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center space-y-4 sp mt-8 md:space-x-32 md:mt-10">
          <div className="p-5 md:h-[324px] md:w-[450px]">
            <h1
              className={`text-white text-xl md:text-3xl ${lilita_one.className}`}
            >
              KOMFORT UND ATMUNGSAKTIIVITÄT
            </h1>
            <ul
              className={`text-white w-[260px] md:text-xl list-disc space-y-4 m-5 ${lilita_one.className}`}
            >
              <li className="text-xl">
                Elastisch und bequem für eine perfekte Passform
              </li>
              <li className="text-xl">
                Bleiben Sie kühl und trocken mit atmungsaktivem Stoff
              </li>
              <li className="text-xl">
                Wiederverwendbar und waschbar für langanhaltenden Komfort
              </li>
            </ul>
          </div>
          <Image
            height={400}
            width={400}
            src={Image1}
            alt=""
            className="md:w-[450px] lg:h-[330px] w-[340px] md:mt-3"
          />
        </div>
        <div className="flex md:mb-16  flex-col justify-center items-center sp mt-8 md:flex-row md:space-x-32 md:mt-10 space-y-4">
          <Image
            height={400}
            width={400}
            src={Image1}
            alt=""
            className="md:w-[450px] lg:h-[330px] w-[340px] md:mt-3"
          />
          <div className="p-5 md:h-[324px] md:w-[450px]">
            <h1
              className={`text-white text-2xl md:text-3xl ${lilita_one.className}`}
            >
              SPIELERLEBNIS AUF PRO-LEVEL
            </h1>
            <ul
              className={`text-white w-[260px] md:text-xl list-disc space-y-4 m-5 ${lilita_one.className}`}
            >
              <li className="text-xl">
                Zermalmen Sie die Konkurrenz mit pro-level Leistung
              </li>
              <li className="text-xl">
                Halten Sie Ihren Bildschirm und Controller frei von
                Fingerabdrücken und Schmierereien
              </li>
              <li className="text-xl">Funktioniert mit allen Geräten</li>
            </ul>
          </div>
        </div>
        <ProductBanner />

        <Footer />
      </div>
    </div>
  );
}
