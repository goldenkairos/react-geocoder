import "./App.css";
import NewLocationForm from "./components/NewLocationForm";
import LocationList from "./components/LocationList";
import Location from "./components/Location";
import axios from "axios";
// import keys from "./ignore";
import keys from "./env";

import { useState, useEffect } from "react";
import { DateTime } from "luxon";
// const axios = require("axios");
// require('dotenv').config();
// const INITIAL_CITY = "Seattle";

// const INITIAL_COORDINATES = {
//   lat: 47.6038321,
//   lon: -122.330062,
// };

const INITIAL_COORDINATES = {
  name: "Seattle",
  lat: 47.6038321,
  lon: -122.330062,
};

function App() {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);

  const [cityList, setCityList] = useState([]);

  const searchCity = (newCity) => {
    console.log("searchCity called");
    console.log(newCity);
    axios
      .get(keys.API, { params: { key: keys.key, q: newCity, format: "json" } })
      .then((result) => {
        const locAPICopy = () => {
          return {
            name: newCity,
            lat: result.data[0].lat,
            lon: result.data[0].lon,
          };
        };
        setCoordinates(locAPICopy);

        setCityList([
          ...cityList,
          { name: newCity, lat: result.data[0].lat, lon: result.data[0].lon },
        ]);
        console.log(cityList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    //we can create a seperate component here as HistoryList
  const historyList = cityList.map((item) => {
    return (
      <div key={DateTime.now()}>
        <h4>{item.name}</h4>
        <Location coordinates={item} />
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Geocoder</h1>
      </header>
      <main>
        <NewLocationForm
          searchCityCallbackfunc={searchCity}
          coordinates={coordinates}
        />
        <section className="result">
          <h3> Result for:</h3>
          <LocationList coordinates={coordinates} />
        </section>
        <section>
          <h3> Search History</h3>
          {historyList}
          {/* <HistoryList cityList={cityList} /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
