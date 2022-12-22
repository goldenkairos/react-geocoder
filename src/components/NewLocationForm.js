import React from "react";
import { useState } from "react";

// const INITIAL_FORM_DATA = {
//   name: "Seattle",
// };

const NewLocationForm = (props) => {
  const city = props.city;
  const [formData, setFormData] = useState(city);

  const onNameChange = (event) => {
    console.log("Handle change called");
    console.log(
      `Target name: ${event.target.name} Target value: ${event.target.value}`
    );
    const newFormData = event.target.value;

    setFormData(newFormData);
  };

  const handleNewSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    props.searchCityCallbackfunc(formData);
  };

  return (
    <form onSubmit={handleNewSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          value={formData}
          onChange={onNameChange}
        />

        <input type="submit" value="Search Now!" />
      </div>
    </form>
  );
};

export default NewLocationForm;
