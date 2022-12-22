import Location from "./Location";

function LocationList(props) {
  // const getInfoCallbackfunc= props.getInfoCallbackfunc;
  const coordinates = props.coordinates;
  // const city = props.city;


  return (
    <div>
      <Location 
      
      // getInfoCallbackfunc={getInfoCallbackfunc}
      coordinates={coordinates}
      // city={city}

      />
    </div>
  )
};

export default LocationList;