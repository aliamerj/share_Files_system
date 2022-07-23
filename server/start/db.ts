import { connect } from "mongoose";
import configDb from "config";
const DB: string = configDb.get("db");

export default function () {
  connect(DB).then((DB) =>
    console.log(`connected to ${DB.connection.name}.. :} `)
  );
}
