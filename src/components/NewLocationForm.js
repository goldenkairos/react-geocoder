import React from "react";
import { useState } from "react";

const INITIAL_FORM_DATA ={
  name:'Seattle'
}


const NewLocationForm = () => {
//   const [formFields, setFormFields] = useState({
//     name: '',
//     email: ''
// });
const [formData, setFormData] = useState(INITIAL_FORM_DATA);

const onNameChange = (event) => {
  console.log("Handle change called")
  console.log(`Target name: ${event.target.name} Target value: ${event.target.value}`)
    setFormData(event.target.value)}
  // const newFormField = {

  //   ...formFields,
  //   [event.target.name]: event.target.value
  // }
  // setFormFields(newFormField);
//   setFormData({
//       ...formData,
//       name: event.target.value
//   })
// };


  return (
      <form>
          <div>
              <label htmlFor="city"></label>
              <input 
              type="text"
              name="city" 
              value={formData.name}  
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