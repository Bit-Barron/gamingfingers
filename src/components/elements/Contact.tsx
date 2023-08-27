import { Lilita_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="bg-[#301782] !text-white mt-2 p-16 flex justify-center items-center text-5xl flex-col">
      <button
        onClick={() => router.push("/kontakt")}
        className={`border-2 rounded-lg p-3 w-52 md:w-52 text-lg md:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
      >
        Kontaktiere uns
      </button>
    </div>
  );
};
