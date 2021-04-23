import express from "express";
import axios from "axios";
import cors from "cors";
require("dotenv").config();
require("source-map-support").install();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/q/:q", async (req, res) => {
  console.log("recieved get request");
  try {
    const latLonResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${req.params.q}&appid=${process.env.WEATHER_KEY}`
    );

    const { lat, lon } = latLonResponse.data[0];
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
    );

    console.log("sending response from get request");
    res.send(weatherResponse.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(4000);
console.log("listening on 4000");
