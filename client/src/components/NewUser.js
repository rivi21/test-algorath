import { useState } from "react";
import { URL_POST, URL_GET } from "../Settings";

const NewUser = ({ setUsers }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName
    }
    if (!body.first_name || !body.last_name) {
      return alert("first an last names are required");
    } else {
      await fetch(URL_POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      await fetch(URL_GET)
        .then(response => response.json())
        .then((data) => setUsers(data))
      setFirstName("");
      setLastName("");
    }
  }

  return (
    <div>
      <h2>New User</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label className="label-form" htmlFor="firstName" >First name: </label>
        <input onChange={e => setFirstName(e.target.value)} className="item-form" type="text" id="firstName" name="first_name" value={firstName} placeholder="First name"></input>
        <label className="label-form" htmlFor="lastName">Last name:  </label>
        <input onChange={e => setLastName(e.target.value)} className="item-form" type="text" id="lastName" name="last_name" value={lastName} placeholder="Last name"></input>
        <input className="button-form" type="submit" value="Save"></input>
      </form>
    </div>
  )
}

export default NewUser