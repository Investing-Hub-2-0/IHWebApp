const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/crypto", async (req, res) => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        ids: "bitcoin,ethereum,binancecoin,ripple",
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
