
import './App.css';
import NewLocationForm from './components/NewLocationForm';
import LocationList from './components/LocationList';
// import API from "./.env"
// import key from "./.env"
import { useState,useEffect } from 'react';

const INITIAL_CITY = [{
  name:"Seattle",
  lat: 47.6038321,
  lon: -122.330062
}];
const key = "pk.d3239da17a96e36bb9f66cb0184f44ec";

const API = 'https://us1.locationiq.com/v1/search.php';

function App() {

const axios = require('axios');

const [coordinates, setCoordinates] = useState(INITIAL_CITY
);

const getInfo= () => {
  axios.get(API, {params:{key:key, q:coordinates[0].name, format:"json"}})
      .then((result) => {
          const locAPICopy = () =>{
            return{
            name: coordinates[0].name,
            lat:result.data[0].lat,
            lon: result.data[0].lon,
          };
        }
        setCoordinates(locAPICopy);  
        console.log("NEW COORDINATES",coordinates)        
      })
      .catch((error) => {
          console.log(error);
      });
}

useEffect(getInfo,[]);

// const getLon= (location) => {
//   axios.get(API, {params:{key:key, q:location, format:"json"}})
//       .then((result) => {
//           // lat = result.data[0].lat;
//           console.log(`${location} lon: ${lon}`);
//           return result.data[0].lon;
          
//       })
//       .catch((error) => {
//           console.log(error);
//       });
// }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Geocoder</h1>
      </header>
      <main>
        <NewLocationForm 
          coordinates={coordinates}
          getInfoCallbackfunc={getInfo}
        />
      <section className='result'>
        <h3> Result for:</h3>
        <LocationList 
        coordinates={coordinates}
        />

        </section>
      </main>
    </div>
  );
}

export default App;
