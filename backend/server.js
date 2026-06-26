const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("H&M Backend Running 🚀");
});

app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Men T-Shirt",
            price: 999
        },
        {
            id: 2,
            name: "Casual Shirt",
            price: 1499
        },
        {
            id: 3,
            name: "Jeans",
            price: 1999
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});