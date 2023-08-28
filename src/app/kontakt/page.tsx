"use client";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import axios from "axios";
import { Lilita_One } from "next/font/google";
import React, { useState } from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

interface pageProps {}

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const Page: React.FC<pageProps> = ({}) => {
  const [nachricht, setNachricht] = useState("");
  const [email, setEmail] = useState("");
  const [betreff, setBetreff] = useState("");
  const [telefon, setTelefon] = useState("");

  const submit = async () => {
    if (!nachricht || !email || !betreff) {
      alert("Bitte füllen Sie alle Felder aus!");
      return;
    }
    const res = await axios.post("/api/kontakt", {
      nachricht,
      email,
      betreff,
      telefon,
    });

    if (res.status === 200) {
      alert("Ihre Nachricht wurde erfolgreich versendet!");
    }
  };

  return (
    <div>
      <Header />

      <main className="overflow-hidden !text-white">
        <div className="bg-gray-900">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-200 sm:text-5xl lg:text-6xl">
                Kontaktieren Sie uns
              </h1>
              <p className="mt-6 text-xl text-warm-gray-300 max-w-3xl">
                Sie möchten mehr erfahren oder brauchen Unterstützung?
                Kontaktieren Sie uns! Wir sind bereit, Ihnen bei jedem Anliegen
                zu helfen.
              </p>
            </div>
          </div>
        </div>

        <section
          className="relative bg-gray-900"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute w-full h-1/2 bg-gray-900"
            aria-hidden="true"
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-warm-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gray-900 shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Hinterlassen Sie uns eine Nachricht
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b bg-[#442873] sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="343"
                      height="388"
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop
                            offset="1"
                            stopColor="#fff"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="359"
                      height="339"
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop
                            offset="1"
                            stopColor="#fff"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width="160"
                      height="678"
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff"></stop>
                          <stop
                            offset="1"
                            stopColor="#fff"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Kontakt Informationen
                  </h3>
                  <p className="mt-6 text-base text-teal-50 max-w-3xl">
                    Treten Sie in Verbindung! Wir freuen uns darauf, von Ihnen
                    zu hören.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Telefonnummer</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-teal-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-3">+49 1708644045</span>
                    </dd>
                    <dt>
                      <span className="sr-only">E-Mail</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-teal-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="ml-3">Kontakt@gamingfingers.de</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-teal-200 hover:text-teal-100"
                        href="https://www.instagram.com/onkelmobs/"
                      >
                        <span className="sr-only">Instagram</span>
                        <AiFillInstagram className="text-2xl" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-teal-200 hover:text-teal-100"
                        href="https://www.youtube.com/@OnkelMo"
                      >
                        <span className="sr-only">Instagram</span>

                        <AiFillYoutube className="text-2xl" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-300">
                    Hinterlassen Sie uns eine Nachricht
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-warm-gray-300"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-warm-gray-700 text-black focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-warm-gray-300"
                        >
                          Telefonnummer
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-warm-gray-700"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          value={telefon}
                          onChange={(e) => setTelefon(e.target.value)}
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full text-black shadow-sm text-warm-gray-700 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        ></input>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-warm-gray-300"
                      >
                        Betreff
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          onChange={(e) => setBetreff(e.target.value)}
                          value={betreff}
                          className="py-3 px-4 block w-full shadow-sm text-black text-warm-gray-700 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        ></input>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium"
                        >
                          Nachricht
                        </label>
                        <span id="message-max" className="text-sm">
                          Max. 500 Zeichen
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          onChange={(e) => setNachricht(e.target.value)}
                          value={nachricht}
                          className="py-3 px-4 text-black block w-full shadow-sm text-warm-gray-700 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                          aria-describedby="message-max"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        onClick={submit}
                        type="button"
                        className={`border-2 rounded-lg p-3 w-52 md:w-52 text-lg md:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
                      >
                        Absenden
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="offices-heading" className="bg-gray-900">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h2
              id="offices-heading"
              className="text-3xl font-extrabold text-warm-gray-300"
            >
              Unsere Standorte
            </h2>
            <p className="mt-6 text-lg text-warm-gray-300 max-w-3xl">
              Unser Büro in Lünen ist strategisch positioniert, um unseren
              Kunden in der Region den besten Service zu bieten. Sie finden uns
              hier:
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-lg font-medium text-warm-gray-300">
                  Lünen (Büro)
                </h3>
                <p className="mt-2 text-base text-red-500">
                  <span className="block">Preussenstrasse 72</span>
                  <span className="block">44532 Lünen</span>
                  <span className="block">Deutschland</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
