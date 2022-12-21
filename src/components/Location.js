function Location(props) {

  const getLat = props.getLat;
  const getLon = props.getLon;

  return (
    <ul>
      <li>Longitude:{getLon}</li>
      <li>Lattitude:{getLat}</li>
    </ul>
  );
}

export default Location;
