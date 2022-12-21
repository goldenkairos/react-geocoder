
import './App.css';
import NewLocationForm from './components/NewLocationForm';
import LocationList from './components/LocationList';

const INITIAL_CITY = [{
  name:"Seattle",
  lat: 47.6038321,
  lon: -122.330062
}]


function App() {

const axios = require('axios');
const key = "pk.d3239da17a96e36bb9f66cb0184f44ec"

const API = 'https://us1.locationiq.com/v1/search.php'
const location = 'Seattle';

let lon = 0;
let lat = 0;

const getLat= (location) => {
  axios.get(API, {params:{key:key, q:location, format:"json"}})
      .then((result) => {
        console.log(`${location} lat: ${lat}`);
          return result.data[0].lat;
          // lon = result.data[0].lon;
          
      })
      .catch((error) => {
          console.log(error);
      });
}

const getLon= (location) => {
  axios.get(API, {params:{key:key, q:location, format:"json"}})
      .then((result) => {
          // lat = result.data[0].lat;
          console.log(`${location} lon: ${lon}`);
          return result.data[0].lon;
          
      })
      .catch((error) => {
          console.log(error);
      });
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Lattitude and Longitude</h1>
      </header>
      <main>
        <NewLocationForm />
      <section className='result'>
        <h3> Result for:</h3>
        <LocationList 
          getLat={getLat}
          getLon={getLon}
        />

        </section>
      </main>
    </div>
  );
}

export default App;
