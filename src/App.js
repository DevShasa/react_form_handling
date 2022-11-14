import FormInput from "./components/FormInput"; 
import { useState } from "react";
import { inputItems } from "./utils/inputs";

function App() {

  const [ values, setValues ] = useState({
      username:"",
      email:"",
      birthday:"",
      password:"",
      confirmPassword:""
  })


  const handleSubmit = (e) =>{
    e.preventDefault()

    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))

    console.log(values)
  }

  const onChange = (e) =>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          {inputItems.map((input)=>(
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button type="submit">
              Submit
          </button>
        </form> 
    </div>
  );
}

export default App;
