



function Location(props) {

  const coordinates = props.coordinates;
  // const city=props.city;
  

  return (
    <div>
    <h3> Result for:{coordinates.name}</h3>
    <ul>    
      <li>Longitude: {coordinates.lon}</li>
      <li>Lattitude: {coordinates.lat}</li>
    </ul>
    </div>
  );
}

export default Location;
