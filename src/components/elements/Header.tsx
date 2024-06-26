import { Lilita_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../../public/images/logo.png";

interface HeaderProps {}

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();

  const removeItem = () => {
    return router.push("/cart/");
  };

  return (
    <div>
      <div className="bg-[#301782]">
        <div
          className={`${lilita_one.className} !text-white flex p-2 justify-center items-center text-xl`}
        >
          Kostenloser Versand
        </div>
      </div>
      <div className="bg-black">
        <div className="flex justify-center items-center">
          <Image
            height={100}
            src={Logo}
            alt="Logo"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    </div>
  );
};
