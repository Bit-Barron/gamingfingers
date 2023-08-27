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
        <div className={`${lilita_one.className} !text-white flex p-2 justify-center items-center text-xl`}>
          Kostenloser Versand
        </div>
      </div>
      <div className="bg-black">
        <div className="flex justify-center items-center">
          <Image height={100} src={Logo} alt="Logo" />
          <div className="absolute top-10 right-0 md:mr-20">
            <AiOutlineShoppingCart
              className="text-3xl mt-10 !text-white"
              onClick={() => removeItem()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// bg-[#6E0DA8]
// bg-[#442873]
