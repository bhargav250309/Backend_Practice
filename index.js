import { config } from "dotenv";
import { app } from "./src/app.js";
import DataBase from "./src/db/dbConnection.js";
config();
DataBase()
  .then(() => {
    // Once DB is connected, start the server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on Port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
  });
