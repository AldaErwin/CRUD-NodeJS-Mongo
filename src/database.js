import mongoose, { connect } from "mongoose";
import {MONGODB_URI} from './config'

mongoose.set('strictQuery', false);

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB conectada a ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
