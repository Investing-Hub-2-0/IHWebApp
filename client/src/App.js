import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-500">CryptoDemo</h1>
        <button className="bg-yellow-500 px-4 py-2 rounded-md text-black font-medium">Sign In</button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-5xl font-bold mb-4 text-yellow-500">IHWebb App</h2>
        <p className="text-gray-400 mb-8">Join the most trusted crypto platform.</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Email/Phone number"
            className="px-4 py-2 rounded-l-md text-black"
          />
          <button className="bg-yellow-500 px-6 py-2 rounded-r-md font-medium text-black">
            Sign Up
          </button>
        </div>
      </section>

      {/* Market Prices */}
      <section className="px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">Popular Cryptos</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Crypto Card */}
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h4 className="font-semibold">BTC</h4>
            <p className="text-gray-400">Bitcoin</p>
            <p className="text-green-400 text-lg font-bold">$98,412.08</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h4 className="font-semibold">ETH</h4>
            <p className="text-gray-400">Ethereum</p>
            <p className="text-green-400 text-lg font-bold">$3,483.58</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h4 className="font-semibold">BNB</h4>
            <p className="text-gray-400">Binance Coin</p>
            <p className="text-green-400 text-lg font-bold">$708.68</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h4 className="font-semibold">XRP</h4>
            <p className="text-gray-400">Ripple</p>
            <p className="text-red-400 text-lg font-bold">$2.28</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4">News</h3>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded-md">
            QCP: MicroStrategy's Latest BTC Purchase Sparks Market Concerns Amid Waning Crypto Enthusiasm.
          </li>
          <li className="bg-gray-800 p-4 rounded-md">
            Michael Saylor Advocates Bitcoin As Ideal Christmas Gift.
          </li>
          <li className="bg-gray-800 p-4 rounded-md">
            Key Trends To Watch In 2025: Blockchain And Digital Currencies.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
