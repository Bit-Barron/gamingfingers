import { Lilita_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import fingersleeve1 from "../../../public/images/fingersleeve1.png";
import fingersleeve2 from "../../../public/images/fingersleeve2.png";
import product2 from "../../../public/images/product2.png";

interface ProductBannerProps {}

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export const ProductBanner: React.FC<ProductBannerProps> = ({}) => {
  const router = useRouter();
  const imgs = [
    {
      src: "https://gamingfingers.de/wp-content/uploads/2021/08/1.png",
      alt: "product1",
    },
  ];

  return (
    <div>
      <div className="bg-[#301782] !text-white mt-2 p-16 flex justify-center items-center text-3xl flex-col">
        <div className={`${lilita_one.className}`}>WÄHLE AUS 3 MOTIVEN</div>
        <div className="md:flex mt-6 ">
          <Image
            src={fingersleeve1}
            className="h-64 rounded-full p-2"
            height={50}
            width={280}
            alt={""}
          />
          <Image
            src={fingersleeve2}
            className="h-64 rounded-full p-2"
            height={50}
            width={280}
            alt={""}
          />
          <Image
            src={product2}
            className="h-64 rounded-full p-2"
            height={50}
            width={280}
            alt={""}
          />
        </div>
        <div className="mt-5">
          <button
            className={`border-2 rounded-lg p-3 w-52 md:w-52 text-lg md:text-xl mt-4 text-[#442873] bg-[#B9E9F2] ${lilita_one.className}`}
            onClick={() => router.push("/products")}
          >
            HIER BESTELLEN
          </button>
        </div>
      </div>
    </div>
  );
};
