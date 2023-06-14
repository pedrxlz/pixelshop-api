require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

var cors = require("cors");

const app = express();

const connectDB = require("./db/connect");

const orderRouter = require("./routes/orderRoutes");
const productRouter = require("./routes/productRoutes");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1/orders", orderRouter);
app.use("/v1/products", productRouter);

const port = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    console.log("Connected to DB");

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
