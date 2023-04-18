import { connect, connection } from "mongoose";

export const connectToDb = async () => {
  try {
    await connect("mongodb://84.46.249.130/api-nodestarter");
  } catch (error) {
    console.log(error);
  }
};

connection.on("connected", () => {
  console.log(`[MongoDB]: connected to ${connection.db.databaseName}`);
});

connection.on("disconnected", () => {
  console.log(`[MongoDB]: disconnected`);
});

connection.on("error", (error) => {
  console.log(`[MongoDB]: error to ${error}`);
});
