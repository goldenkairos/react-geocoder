



function Location(props) {

  const coordinates = props.coordinates
  

  return (
    <ul>
      <li>Longitude:{coordinates[0].lon}</li>
      <li>Lattitude:{coordinates[0].lat}</li>
    </ul>
  );
}

export default Location;
