import "./App.css";
import NewLocationForm from "./components/NewLocationForm";
import LocationList from "./components/LocationList";
import axios from "axios";
// import API from "./.env"
// import key from "./.env"
import { useState, useEffect } from "react";
// const axios = require("axios");

const INITIAL_CITY = "Seattle";

const INITIAL_COORDINATES = {
  lat: 47.6038321,
  lon: -122.330062,
};
const key = "";

const API = "";

function App() {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
  const [city, setCity] = useState(INITIAL_CITY);

  const searchCity = (newCity) => {
    setCity(newCity);
    axios.get(API, { params: { key: key, q: newCity, format: "json" } })
    .then((result) => {
      const locAPICopy = () => {
        return {
          lat: result.data[0].lat,
          lon: result.data[0].lon,
        };
      };
      setCoordinates(locAPICopy);
      console.log(locAPICopy)
      // console.log("NEW COORDINATES", coordinates);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  // const getInfo = () => {
  //   axios
  //     .get(API, { params: { key: key, q: coordinates.name, format: "json" } })
  //     .then((result) => {
  //       const locAPICopy = () => {
  //         return {
  //           name: coordinates.name,
  //           lat: result.data[0].lat,
  //           lon: result.data[0].lon,
  //         };
  //       };
  //       setCoordinates(locAPICopy);
  //       console.log("NEW COORDINATES", coordinates);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //   .get(API, { params: { key: key, q: city, format: "json" } })
  //   .then((result) => {
  //     const locAPICopy = () => {
  //       return {
  //         lat: result.data[0].lat,
  //         lon: result.data[0].lon,
  //       };
  //     };
  //     setCoordinates(locAPICopy);
  //     // console.log("NEW COORDINATES", coordinates);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, [city]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Geocoder</h1>
      </header>
      <main>
        <NewLocationForm searchCityCallbackfunc={searchCity} city={city} />
        <section className="result">
          <h3> Result for:</h3>
          <LocationList coordinates={coordinates} />
        </section>
      </main>
    </div>
  );
}

export default App;
