const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization",],

}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Request Body:", req.body);
  next();
})

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.use("/api", routes);

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
