import "reflect-metadata";
import { createConnection } from "typeorm";
import App from "./app";
const PORT = 4200;

createConnection()
  .then(() => {
    console.log("Connected to database");
    App.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  })
  .catch(error => console.log(error));
