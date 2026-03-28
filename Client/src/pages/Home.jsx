"use client";

import { useState } from "react";
import { fetchWeather } from "../services/FetchAPI";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-md gap-2">
      <input
        type="text"
        placeholder="Enter city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default function Home() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>

        <SearchBar onSearch={handleSearch} />

        {weather && (
          <div className="mt-6 w-full text-center">
            <h2 className="text-xl font-semibold">{weather.city}</h2>
            <p className="text-gray-600 text-3xl font-bold">
              {weather.temp}°C
            </p>
            <p className="text-gray-500">{weather.condition}</p>
          </div>
        )}
      </div>
    </main>
  );
}