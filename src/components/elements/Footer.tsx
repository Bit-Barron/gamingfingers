import { Lilita_One } from "next/font/google";

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: "Nutzungsbedingungen", href: "/privacy/" },
    { name: "Datenschutz", href: "/privacy/" },
  ],
};

export const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#6E0DA8]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          <p className="mt-5 text-center text-base text-white">
            &copy; 2023 Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};
