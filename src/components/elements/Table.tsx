import { GeneralStore } from "@/store/GeneralStore";
import { uid } from "@/utils/clientHelper";
import { Lilita_One } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Alerts } from "../utils/Alerts";

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

export const Table = () => {
  const [cart, setCart] = useState<any[]>(getLocalStorage());
  const router = useRouter();
  const { addAlert, alerts } = GeneralStore();

  useEffect(() => {
    const getItem = () => {
      const parsedItem = JSON.parse(localStorage.getItem("cart") || "[]");

      setCart(parsedItem);
    };
    getItem();
  }, []);

  const removeItem = () => {
    addAlert({
      id: uid(),
      message: "Erfolgreich entfernt",
      type: "success",
    });
    localStorage.removeItem("cart");
    router.push("/products");
  };
  const prices = cart.map((item) => item.price);

  // Get an array of all quantities
  const quantities = cart.map((item) => item.quantity);

  // Calculate the total cost for each item (price * quantity)
  const itemTotals = cart.map((item, index) => item.price * item.quantity);

  // Calculate the sum of all item totals to get the final total
  const total = itemTotals.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="flex flex-col container mx-auto">
      {alerts.map((alert) => (
        <Alerts key={alert.id} />
      ))}
      {cart.length === 0 ? (
        <>
          <div className="text-center items p-2 text-xl font-bold bg-green-800 mt-2 ">
            Nichts im warenkorb
          </div>
          <div className="mx-auto">
            <button
              className={`border-2  rounded-lg p-3 w-52 md:w-52 text-lg md:text-xl mt-4 bg-[#442873] ${lilita_one.className}`}
              onClick={() => router.push("/products")}
            >
              zurück
            </button>
          </div>
        </>
      ) : (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6lg:px-8">
            <div className="flex justify-between">
              <h1 className={`${lilita_one.className} !text-4xl p-2 ml-2`}>
                Warenkorb
              </h1>
              <BsFillTrashFill
                className="text-xl mt-4 mr-5 hover:text-red-700"
                onClick={() => removeItem()}
              />
            </div>

            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg mt-10 ml-2 mr-2">
              <table className="min-w-full divide-y divide-gray-200 p-2 overflow-hidden">
                <thead className="overflow-hidden">
                  <tr className="">
                    <th
                      scope="col"
                      className={`${lilita_one.className} px-6 py-4 flex items-start justify-start whitespace-nowrap text-xl font-medium text-white`}
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className={`${lilita_one.className} px-6 py-4  justify-end whitespace-nowrap text-xl font-medium text-white`}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {cart.map((item) => (
                    <tr key={item.name}>
                      <td
                        className={`${lilita_one.className} px-6 py-4 whitespace-nowrap text-xl font-medium text-white`}
                      >
                        {item.product}
                      </td>
                      <td
                        className={`${lilita_one.className} px-6 py-7 flex justify-end items-end whitespace-nowrap text-xl font-medium text-white`}
                      >
                        {prices[0]}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
