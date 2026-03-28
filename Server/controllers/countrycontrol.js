import express from "express";
import axios from "axios";
import Search from "../models/search.model.js"; // Add .js extension

export const getcities = async (req, res) => {
    const city = req.query.city;
    
    if (!city) {
        return res.status(400).json({ error: "City name is required" });
    }
    
    try {
        // Check if search exists
        const existingSearch = await Search.findOne({ city });
        if (!existingSearch) {
            const newSearch = new Search({ city }); // Changed variable name to newSearch
            await newSearch.save();
        }
        
        // Fetch weather data
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0db0c09f6504be31c980e7aab9dfe63&units=metric`);
        console.log(response.data);
        
       res.json({
  city: response.data.name,
  temp: response.data.main.temp,
  condition: response.data.weather[0].description
});
    } catch(error) {
        console.error(error);
        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: "City not found" });
        } else {
            res.status(500).json({ error: "An error occurred while fetching weather data" });
        }
    }
}