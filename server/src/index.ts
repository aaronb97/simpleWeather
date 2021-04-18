import express from "express";
import axios from "axios";
require("dotenv").config();
require("source-map-support").install();

const app = express();

app.get("/q/:q", async (req, res) => {
  try {
    const latLonResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${req.params.q}&appid=${process.env.WEATHER_KEY}`
    );

    const { lat, lon } = latLonResponse.data[0];

    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
    );

    res.send(weatherResponse.data);
  } catch (e) {
    console.log(e);
  } finally {
    // idk
  }
});

app.listen(3000);
console.log("listening on 3000");
