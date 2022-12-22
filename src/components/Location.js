



function Location(props) {

  const coordinates = props.coordinates;
  // const city=props.city;
  

  return (
    <ul>
      <li>Longitude: {coordinates.lon}</li>
      <li>Lattitude: {coordinates.lat}</li>
    </ul>
  );
}

export default Location;
