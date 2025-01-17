import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Footer from './shared/footer/footer';
import Header from './shared/header/header';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/crypto");
        setCryptoData(response.data);
        setError(null); // Clear any previous error
      } catch (err) {
        console.error("Error fetching crypto data:", err.message);
        setError("Failed to fetch crypto data. Please try again later.");
      }
    };

    // Fetch data initially
    fetchCryptoData();

    // Set up interval for periodic updates (every 5 minutes)
    const intervalId = setInterval(fetchCryptoData, 5 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const sortData = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
      }
    });
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filteredData = cryptoData.filter((crypto) =>
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = sortData(filteredData);

  return (
    <div id='page-container'>
      <div id='content-wrap'>
        <Header />
        <Dashboard />
      </div>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-yellow-500">CryptoDemo</h1>
          <button className="bg-yellow-500 px-4 py-2 rounded-md text-black font-medium">
            Sign In
          </button>
        </header>
        <section className="px-6 py-4">
          <input
            type="text"
            placeholder="Search cryptocurrency..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-black rounded-md"
          />
        </section>
        <section className="px-6 py-8">
          <h3 className="text-2xl font-semibold mb-4">All Cryptos in USD</h3>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : sortedData.length === 0 ? (
            <p className="text-gray-400">No cryptocurrencies found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("symbol")}>
                      Name {sortConfig.key === "symbol" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("price")}>
                      Price {sortConfig.key === "price" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("change1h")}>
                      1h Change {sortConfig.key === "change1h" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("change4h")}>
                      4h Change {sortConfig.key === "change4h" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("change24h")}>
                      24h Change {sortConfig.key === "change24h" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("volume")}>
                      24h Volume {sortConfig.key === "volume" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("marketCap")}>
                      Market Cap {sortConfig.key === "marketCap" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((crypto, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                    >
                      <td className="px-4 py-2">{crypto.symbol}</td>
                      <td className="px-4 py-2">${crypto.price}</td>
                      <td
                        className={`px-4 py-2 ${
                          crypto.change1h < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {crypto.change1h === "N/A" ? "N/A" : `${crypto.change1h}%`}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          crypto.change4h < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {crypto.change4h === "N/A" ? "N/A" : `${crypto.change4h}%`}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          crypto.change24h < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {crypto.change24h}%
                      </td>
                      <td className="px-4 py-2">
                        ${parseFloat(crypto.volume).toLocaleString()}
                      </td>
                      <td className="px-4 py-2">
                        ${parseFloat(crypto.marketCap).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
      <Footer id='footer' />
    </div>
  );
}

export default App;
