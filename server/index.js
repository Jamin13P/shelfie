require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/api/inventory", ctrl.getInventory)
app.post("/api/product", ctrl.createProduct)
app.put("/api/product/:id", ctrl.editProduct)
app.delete("/api/product/:id", ctrl.deleteProduct)

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
