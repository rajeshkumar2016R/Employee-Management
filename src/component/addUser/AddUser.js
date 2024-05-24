import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./AddUser.css";
import axois from 'axios'
import toast from "react-hot-toast";

const AddUser = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:""
  })
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value)
    setUser({...user, [name]:value} )
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    setUser({email:" " ,name:" " , phone:" "})
    await axois.post("http://localhost:8000/create", user)
    .then((res)=>{
      toast.success(res.data.message)
      navigate("/");
    }).catch(error => console.log(error))
  }

  return (
    <div className="AddUser">
      <Link to={"/"}>BACK</Link>
      <form onSubmit={submitHandler}>
        <h1>ADD EMPLOYEE</h1>
        <div className="add-input">
          <label htmlFor="name">Name: </label>
          <input type="text"
           id="name" 
           name="name"
           placeholder="Enter Name" 
           onChange={inputHandler}
          />
        </div>
        <div className="add-input">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={inputHandler}
          />
        </div>
        <div className="add-input">
          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter phone"
            onChange={inputHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
