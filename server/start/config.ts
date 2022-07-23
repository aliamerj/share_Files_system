import configDb from "config";
export default function () {
  if (!configDb.get("db")) {
    throw new TypeError("FATAL ERROR : DB KEY is not defined");
  }
}
