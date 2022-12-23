import "./App.css";
import NewLocationForm from "./components/NewLocationForm";
import LocationList from "./components/LocationList";
import axios from "axios";
// import API from "./.env"
// import key from "./.env"
import { useState, useEffect } from "react";
// const axios = require("axios");
// require('dotenv').config();
// const INITIAL_CITY = "Seattle";

// const INITIAL_COORDINATES = {
//   lat: 47.6038321,
//   lon: -122.330062,
// };

const INITIAL_COORDINATES ={
  name:"Seattle",
  lat: 47.6038321,
  lon: -122.330062,
}
const key = "pk.d3239da17a96e36bb9f66cb0184f44ec";

const API = "https://us1.locationiq.com/v1/search.php";

function App() {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES);
  // const [city, setCity] = useState(INITIAL_CITY);

  const searchCity = (newCity) => {
    console.log("searchCity called");
    console.log(newCity)
    axios.get(API, { params: { key:key, q: newCity, format: "json" } })
    .then((result) => {
      const locAPICopy = () => {
        return {
          name:newCity,
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
        <NewLocationForm searchCityCallbackfunc={searchCity} coordinates={coordinates} />
        <section className="result">
          <h3> Result for:</h3>
          <LocationList coordinates={coordinates} />
        </section>
      </main>
    </div>
  );
}

export default App;
