import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type CheckoutStore = {
  email: string;
  setEmail: (email: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  straße: string;
  setStraße: (straße: string) => void;
  postleitzahl: string;
  setPostleitzahl: (postleitzahl: string) => void;
  stadt: string;
  setStadt: (stadt: string) => void;
  bundesland: string;
  setBundesland: (bundesland: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  region: string;
  setRegion: (region: string) => void;
  telefon: string;
  setTelefon: (telefon: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export const checkoutStore = create<CheckoutStore>()(
  immer<CheckoutStore>((set) => ({
    email: "",
    setEmail: (email: string) =>
      set((state) => {
        state.email = email;
      }),
    firstName: "",
    setFirstName: (firstName: string) =>
      set((state) => {
        state.firstName = firstName;
      }),
    lastName: "",
    setLastName: (lastName: string) =>
      set((state) => {
        state.lastName = lastName;
      }),
    straße: "",
    setStraße: (straße: string) =>
      set((state) => {
        state.straße = straße;
      }),
    postleitzahl: "",
    setPostleitzahl: (postleitzahl: string) =>
      set((state) => {
        state.postleitzahl = postleitzahl;
      }),
    stadt: "",
    setStadt: (stadt: string) =>
      set((state) => {
        state.stadt = stadt;
      }),
    bundesland: "",
    setBundesland: (bundesland: string) =>
      set((state) => {
        state.bundesland = bundesland;
      }),
    notes: "",
    setNotes: (notes: string) =>
      set((state) => {
        state.notes = notes;
      }),
    region: "",
    setRegion: (region: string) =>
      set((state) => {
        state.region = region;
      }),
    telefon: "",
    setTelefon: (telefon: string) =>
      set((state) => {
        state.telefon = telefon;
      }),
    quantity: 1,
    setQuantity: (quantity: number) =>
      set((state) => {
        state.quantity = quantity;
      }),
  }))
);
