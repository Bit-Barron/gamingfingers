import { Alert } from "@/@types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type GeneralStore = {
  alerts: Alert[];

  addAlert: (alert: Alert) => void;
  removeAlert: (id: string) => void;
};

export const GeneralStore = create<GeneralStore>()(
  immer<GeneralStore>((set) => ({
    alerts: [],

    addAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
    removeAlert: (id) =>
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      })),
  }))
);
