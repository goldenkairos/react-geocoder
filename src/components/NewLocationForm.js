import React from "react";
import { useState } from "react";


const NewLocationForm = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: ''
});

const onNameChange = (event) => {
  setFormFields({
      ...formFields,
      name: event.target.value
  })
};


  return (
      <form>
          <div>
              <label htmlFor="city"></label>
              <input 
              name="city" 
              value={formFields.name}  
              onChange={onNameChange}
              />
          
          <input
              type="submit"
              value="Search Now!" />
          </div>
      </form>
  );
};

export default NewLocationForm;