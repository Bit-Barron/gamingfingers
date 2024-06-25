import { Lilita_One } from "next/font/google";
import Image from "next/image";
import logolar from "../../../public/images/logolar.png";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#6E0DA8]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="mx-auto flex justify-center items-center mt-2">
            <Image width={120} height={120} src={logolar} alt={""} />
          </div>
          <p className="mt-5 text-center text-base text-white">
            &copy; 2023 Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};
