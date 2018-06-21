import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const config = {
  api: {
    weather: {
      apiKey: "4afe87cd7eddc53b1473c2bc0ddb2e37",
      city: "London",
      url: "https://api.openweathermap.org/data/2.5/weather"
    },
    unsplash: {
      apiKey:
        "17de354439973eb34b4aae66cb3c27ceea000efc05a8c6c94da17edac9cd3a7b",
      url: "https://api.unsplash.com/search/photos"
    }
  }
};

ReactDOM.render(<App config={config} />, document.getElementById("⚛️"));
