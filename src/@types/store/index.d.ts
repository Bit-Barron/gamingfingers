export type AlertType = "failure" | "gray" | "info" | "success" | "warning";

export type Alert = {
  id: string;
  message: string;
  type: AlertType;
};
