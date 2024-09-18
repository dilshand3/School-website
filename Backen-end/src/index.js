import { app } from "./app.js";
import connnectDB from "./db/db.js";

connnectDB()
.then(() => {
   app.listen(process.env.PORT,() => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
   })
})
.catch((error) => {
    console.log(`Mongodb connection failed due to ${error}`)
})