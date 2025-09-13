import "./App.css"
import { useState } from "react"
function App() {
  const [formdata, setformdata] = useState({ email: "", password: "" })

  const handleChange = (event) => {
    setformdata(
      {
        ...formdata,
        [event.target.name]: event.target.value
      }
    )
  }

  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleInc = () => {
    setCount((prevCount) => prevCount + 1)
    console.log(count)
  }
  /*const handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
  }*/
  const handleClick = (name) => {

    console.log("login successful")
    alert("you clicked the button")
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Email: ' + formdata.email + ' Password: ' + formdata.password);

  }
  return (
    <div>
      <p>I am a button</p>
      <form onSubmit={handleSubmit}></form>
      <p>{count}</p>
      <button onClick={handleInc}>Increment</button>
      <input type="text" name="email" placeholder="Enter your Email" onChange={handleChange} />
      <input type="text" name="password" placeholder="Enter your Password" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>login</button>
      



    </div>
  )
}


export default App
