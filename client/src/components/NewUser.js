import { useState } from "react";
import { URL_POST } from "../Settings";

const NewUser = (/* { users, setUsers } */) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const newUser = {
    firstName: firstName,
    lastName: lastName
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL_POST, {
      method: "POST",
      headers:{
        "Content-Type": "application-json"  
      },
      body: JSON.stringify(newUser)
    })
    /* setUsers([...users, newUser]) */ //Esto lo cogerá de la base de datos
    
  }
  return (
    <div>
      <h2>New User</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label className="label-form" htmlFor="firstName" >First name: </label>
        <input onChange={e => setFirstName(e.target.value)} className="item-form" type="text" id="firstName" name="firstName" placeholder="First name"></input>
        <label className="label-form" htmlFor="lastName">Last name:  </label>
        <input onChange={e => setLastName(e.target.value)} className="item-form" type="text" id="lastName" name="lastName" placeholder="Last name"></input>
        <input className="button-form" type="submit" value="Save"></input>
      </form>
    </div>
  )
}

export default NewUser