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
    email: "test@gmail.com",
    setEmail: (email: string) =>
      set((state) => {
        state.email = email;
      }),
    firstName: "test",
    setFirstName: (firstName: string) =>
      set((state) => {
        state.firstName = firstName;
      }),
    lastName: "test",
    setLastName: (lastName: string) =>
      set((state) => {
        state.lastName = lastName;
      }),
    straße: "test",
    setStraße: (straße: string) =>
      set((state) => {
        state.straße = straße;
      }),
    postleitzahl: "test",
    setPostleitzahl: (postleitzahl: string) =>
      set((state) => {
        state.postleitzahl = postleitzahl;
      }),
    stadt: "test",
    setStadt: (stadt: string) =>
      set((state) => {
        state.stadt = stadt;
      }),
    bundesland: "test",
    setBundesland: (bundesland: string) =>
      set((state) => {
        state.bundesland = bundesland;
      }),
    notes: "test",
    setNotes: (notes: string) =>
      set((state) => {
        state.notes = notes;
      }),
    region: "test",
    setRegion: (region: string) =>
      set((state) => {
        state.region = region;
      }),
    telefon: "test",
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
