import { GeneralStore } from "@/store/GeneralStore";
import { AlertNotification } from "../misc/AlertNotifications";

interface AlertsProps {}

export const Alerts: React.FC<AlertsProps> = ({}) => {
  const { alerts } = GeneralStore();

  return (
    <div
      className={`absolute mt-20 bottom-0 right-0 z-50 px-2 md:top-5 md:right-5 md:bottom-auto`}
    >
      {alerts.map(({ id, message, type }) => (
        <AlertNotification
          key={id}
          className="mt-2"
          type={type}
          id={id}
          message={message}
        />
      ))}
    </div>
  );
};
