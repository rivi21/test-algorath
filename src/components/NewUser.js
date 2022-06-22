
const NewUser = () => {
  return (
    <div>
      <h2>New User</h2>
      <form className="form">
        <label className="label-form" htmlFor="firstName" >First name: </label>
        <input className="item-form" type="text" id="firstName" name="firstName" placeholder="First name"></input>
        <label className="label-form" htmlFor="lastName">Last name:  </label>
        <input className="item-form" type="text" id="lastName" name="lastName" placeholder="Last name"></input>
        <input className="button-form" type="submit" value="Save"></input>
      </form>
    </div>
  )
}

export default NewUser