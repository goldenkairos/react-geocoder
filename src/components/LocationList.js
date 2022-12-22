import Location from "./Location";

function LocationList(props) {
  const getInfoCallbackfunc= props.getInfoCallbackfunc;
  const coordinates = props.coordinates;


  return (
    <div>
      <Location 
      
      getInfoCallbackfunc={getInfoCallbackfunc}
      coordinates={coordinates}

      />
    </div>
  )
};

export default LocationList;