const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Fetch 24-hour stats for all symbols
const fetch24HourStats = async () => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
    return response.data.filter((item) => item.symbol.endsWith("USDT")); // Only USDT pairs
  } catch (error) {
    console.error("Error fetching 24-hour stats:", error.message);
    throw error;
  }
};

// Fetch 1-hour and 4-hour change data for a given symbol
const getKlineChange = async (symbol, interval) => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/klines', {
      params: {
        symbol,
        interval,
        limit: 2, // Get the last two data points
      },
    });

    const [previous, latest] = response.data;
    const previousClose = parseFloat(previous[4]); // Close price of the previous candle
    const latestClose = parseFloat(latest[4]); // Close price of the latest candle

    const change = ((latestClose - previousClose) / previousClose) * 100;
    return change.toFixed(2);
  } catch (error) {
    console.error(`Error fetching kline data for ${symbol} at ${interval}:`, error.message);
    return "N/A";
  }
};

// Fetch detailed crypto stats
const fetchCryptoData = async () => {
  const usdtPairs = await fetch24HourStats();

  // Fetch 1h and 4h changes for each symbol
  const data = await Promise.all(
    usdtPairs.map(async (item) => {
      const symbol = item.symbol;
      const price = parseFloat(item.lastPrice).toFixed(2);

      const change1h = await getKlineChange(symbol, "1h"); // 1-hour change
      const change4h = await getKlineChange(symbol, "4h"); // 4-hour change

      return {
        symbol: symbol.replace("USDT", ""),
        price,
        change1h,
        change4h,
        change24h: parseFloat(item.priceChangePercent).toFixed(2),
        volume: (item.volume * item.lastPrice).toFixed(2), // 24h volume in USD
        marketCap: ((item.volume * item.lastPrice) * 1000).toFixed(2), // Simulated market cap
      };
    })
  );

  return data;
};

// Route to fetch detailed crypto stats
app.get("/api/crypto", async (req, res) => {
  try {
    const data = await fetchCryptoData();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Binance data:", error.message);
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
