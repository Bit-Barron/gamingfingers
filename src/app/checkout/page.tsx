"use client";

import { Contact } from "@/components/elements/Contact";
/* eslint-disable react/no-unescaped-entities */
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { checkoutStore } from "@/store/CheckoutStore";
import { GeneralStore } from "@/store/GeneralStore";
import { uid } from "@/utils/clientHelper";
import { Lilita_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
// use dotenv

const stripe = require("stripe")(process.env.STRIPE_TOKEN);

interface pageProps {}
const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const getLocalStorage = () => {
  let item = localStorage.getItem("cart");
  if (item) {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } else {
    return [];
  }
};

const Page: React.FC<pageProps> = ({}) => {
  const {
    bundesland,
    email,
    firstName,
    lastName,
    notes,
    postleitzahl,
    region,
    setBundesland,
    setEmail,
    setFirstName,
    setLastName,
    setNotes,
    setPostleitzahl,
    setRegion,
    setStadt,
    setStraße,
    setTelefon,
    stadt,
    straße,
    telefon,
  } = checkoutStore();
  const { addAlert } = GeneralStore();
  const [cart, setCart] = useState<any[]>(getLocalStorage());
  const [paymentMethod, setPaymentMethod] = useState("card");
  const router = useRouter();

  useEffect(() => {
    const getItem = () => {
      const parsedItem = JSON.parse(localStorage.getItem("cart") || "[]");

      setCart(parsedItem);
    };
    getItem();
  }, []);

  const paymentMethods = [
    { id: "card", title: "card" },
    { id: "paypal", title: "paypal" },
    { id: "sofort", title: "sofort" },
    { id: "giropay", title: "giropay" },
  ];

  const submit = async () => {
    if (
      !email ||
      !firstName ||
      !lastName ||
      !straße ||
      !postleitzahl ||
      !bundesland ||
      !telefon ||
      !region ||
      !stadt
    ) {
      alert("Bitte füllen Sie alle Felder aus!");
      return;
    }

    if (!email.includes("@")) {
      alert("Bitte geben Sie eine gültige Email Adresse ein!");
      return;
    }

    const price = cart.map((item) => item.price);
    const combineAllQuantity = cart
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);

    try {
      // stripe data
      const body = {
        productName: "Gaming Finger Sleeves",
        unit_amount: price[0],
        quantity: combineAllQuantity,
        payment_method_types: paymentMethod,
      };

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: body.productName,
              },
              unit_amount: (body.unit_amount * 100) as number,
            },
            quantity: body.quantity || 1,
          },
        ],
        payment_method_types: [`${paymentMethod}`],
        mode: "payment",
        success_url: "http://localhost:3000/success/",
        cancel_url: "http://localhost:3000/cancel/",
      });

      router.push(session.url);

      addAlert({
        id: uid(),
        type: "success",
        message: "erflogeich bestellt",
      });
      const customer = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        straße: straße,
        postleitzahl: postleitzahl,
        bundesland: bundesland,
        telefon: telefon,
        region: region,
        stadt: stadt,
        notes: notes,
      };
      localStorage.setItem("customer", JSON.stringify(customer));
    } catch (error) {
      console.log(error);
      addAlert({
        id: uid(),
        type: "failure",
        message: "Fehler beim bestellen, bitte versuchen Sie es erneut",
      });
    }
  };

  const quantities = cart.map((item) => item.quantity);

  const totalbeforefixed =
    quantities.reduce((acc, curr) => acc + curr, 0) * 7.85;

  const total = totalbeforefixed.toFixed(1);

  return (
    <>
      <Header />
      <div className="mx-auto container">
        <div>
          <h1
            className={`${lilita_one.className} text-white text-4xl ml-3 mt-4`}
          >
            Zur Kasse
          </h1>
          <h1
            className={`${lilita_one.className} text-white text-2xl ml-3 mt-4`}
          >
            1. Kontaktinformationen
          </h1>
          <div
            className={`text-lg ml-3 text-white mt-2 ${lilita_one.className}`}
          >
            Wir werden diese E-Mail verwenden, um Ihnen Details und
            Aktualisierungen zu Ihrer Bestellung.
          </div>
          <div>
            <div className="mb-6 p-2 mt-4">
              <label
                htmlFor="email"
                className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
              >
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>

          <h1
            className={`${lilita_one.className} text-white text-2xl ml-3 mt-4`}
          >
            2. Rechnungs - und Lieferadresse
          </h1>
          <div
            className={`text-lg ml-3 text-white mt-2 ${lilita_one.className}`}
          >
            Geben Sie die Rechnungs- und Lieferadresse ein, die mit Ihrer
            Zahlungsmethode Methode entspricht.
          </div>
          <div>
            <form className="p-2">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Vorname *
                  </label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    id="first_name"
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Nachname *
                  </label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    id="last_name"
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Land / Region *
                  "
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Land / Region *
                  </label>
                  <input
                    onChange={(e) => setRegion(e.target.value)}
                    value={region}
                    type="text"
                    id="last_name"
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="deutschland"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Address"
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Straße *
                  </label>
                  <input
                    onChange={(e) => setStraße(e.target.value)}
                    value={straße}
                    type="text"
                    id="Address"
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="Straßenname und Hausnummer"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Postleitzahl"
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Postleitzahl *
                  </label>
                  <input
                    onChange={(e) => setPostleitzahl(e.target.value)}
                    value={postleitzahl}
                    type="text"
                    id="Postleitzahl"
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="Apartment, suite, etc.(optional)"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Ort / Stadt *"
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Ort / Stadt *
                  </label>
                  <input
                    onChange={(e) => setStadt(e.target.value)}
                    value={stadt}
                    type="text"
                    id="Ort / Stadt *"
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="country/region"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Bundesland / Landkreis "
                    className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                  >
                    Bundesland / Landkreis *
                  </label>
                  <input
                    onChange={(e) => setBundesland(e.target.value)}
                    value={bundesland}
                    type="text"
                    id="Bundesland / Landkreis "
                    className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                    placeholder="city"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Telefon"
                  className={`block mb-2 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
                >
                  Telefon *
                </label>
                <input
                  onChange={(e) => setTelefon(e.target.value)}
                  value={telefon}
                  id="Telefon"
                  type="tel"
                  className="bg-[#181A1B] border h-14 border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
                  placeholder="State/Country"
                  required
                />
              </div>
            </form>
          </div>
          <h1
            className={`${lilita_one.className} text-white text-2xl ml-3 mt-4`}
          >
            3. Zahlungsmöglichkeiten
          </h1>
          <div className="mt-10">
            <label
              htmlFor="message"
              className={`block mb-2 ml-4 text-lg font-medium text-gray-900 dark:text-white ${lilita_one.className}`}
            >
              Notizen (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              id="message"
              className="bg-[#181A1B] border w-[300px] md:w-1/2 border-gray-300 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-4"
              placeholder="Anmerkung zu deiner Bestellung, z.B besondere Hinweise für die Lieferung."
            ></textarea>
          </div>
          <fieldset className="mt-4">
            <legend className="sr-only">Payment type</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 ml-4">
              {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                <div key={paymentMethod.id} className="flex items-center">
                  {paymentMethodIdx === 0 ? (
                    <input
                      id={paymentMethod.id}
                      name="payment-type"
                      type="radio"
                      defaultChecked
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  ) : (
                    <input
                      id={paymentMethod.id}
                      name="payment-type"
                      type="radio"
                      onChange={() => setPaymentMethod(paymentMethod.id)}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  )}

                  <label
                    htmlFor={paymentMethod.id}
                    className="ml-3 block text-sm font-medium text-white"
                  >
                    {paymentMethod.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="flex items-center mb-4 mt-4">
          <div
            className={`${lilita_one.className} ml-4 text-sm font-medium text-gray-900 dark:text-gray-300`}
          >
            Indem Sie mit dem Kauf fortfahren, erklären Sie sich mit unseren
            Allgemeinen Geschäftsbedingungen und unserer Datenschutzrichtlinie
            einverstanden.
          </div>
        </div>
        <div className="rounded-lg px-4 py-6 sm:p-6 lg:p-8 max-w-12xl mx-auto ">
          <div className="mt-4 ml-32pl-6">
            <dl className="border-gray-200 py-6 md:w-[500px] px-4 space-y-6 sm:px-6">
              <div className="flex items-center justify-between">
                <dt className={`${lilita_one.className} text-lg text-white`}>
                  Zwischensumme
                </dt>
                <dd
                  className={`${lilita_one.className} text-sm font-medium text-white`}
                >
                  {total} €
                </dd>
              </div>
              <div className="flex items-center border-t justify-between">
                <dt
                  className={`${lilita_one.className} mt-4 text-lg text-white`}
                >
                  Kostenloser Versand
                </dt>
                <dd
                  className={`${lilita_one.className} mt-4 text-sm font-medium text-white`}
                >
                  0€
                </dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt
                  className={`${lilita_one.className} text-xl font-medium text-white`}
                >
                  Gesammt
                </dt>
                <dd
                  className={`${lilita_one.className} text-base font-medium text-white`}
                >
                  {total} €
                </dd>
              </div>
            </dl>

            <div className="mt-10 mb-10 p-2 flex md:justify-end">
              <button
                onClick={submit}
                type="button"
                className={`border-2 rounded-lg text-white p-3 w-full text-lg md:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
              >
                WEITER ZUR ZAHLUNG
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-2">
          <div
            onClick={() => router.push("/cart")}
            className={`${lilita_one.className} mt-6 text-xl flex text-[#6E0DA8] hover:underline`}
          >
            <MdKeyboardBackspace className="mr-2 text-2xl mt-1 text-[#6E0DA8]" />
            zurück
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Page;
