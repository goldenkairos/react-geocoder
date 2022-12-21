import Location from "./Location";

function LocationList(props) {
  const getLat = props.getLat;
  const getLon = props.getLon;

  return (
    <div>
      <Location 
      key={props.lat}
      // lat={props.lat}
      // lon={props.lon}
      getLat={getLat}
      getLon={getLon}

      />
    </div>
  )
};

export default LocationList;