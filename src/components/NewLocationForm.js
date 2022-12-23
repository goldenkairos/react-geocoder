import React from "react";
import { useState } from "react";

// const INITIAL_FORM_DATA = {
//   name: "Seattle",
// };

const NewLocationForm = (props) => {
  const coordinates = props.coordinates;
  const [formData, setFormData] = useState(coordinates);

  const onNameChange = (event) => {
    console.log("Handle change called");
    console.log(
      `Target name: ${event.target.name} Target value: ${event.target.value}`
    );
    // const newFormData = event.target.value;
    const newFormData = {
      ...formData,
      [event.target.name]:event.target.value};
    setFormData(newFormData);
  };

  const handleNewSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    props.searchCityCallbackfunc(formData.name);
  };

  return (
    <form onSubmit={handleNewSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onNameChange}
        />

        <input type="submit" value="Search Now!" />
      </div>
    </form>
  );
};

export default NewLocationForm;
