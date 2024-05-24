import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams} from 'react-router-dom'

const UpdateUser = () => {
const[userData, setUserData] = useState({
  name:"",
  email:"",
  phone:""
})
 const {id} = useParams();
 const navigate = useNavigate();
   const inputUpdateHandler =(e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value})
    console.log(userData)
   }
    const updateSubmitHandler = async(e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:8000/update/${id}`, userData)
        .then((res)=>{
            toast.success(res.data.message)
            navigate("/");
        }).catch(error => console.log(error))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/getone/${id}`)
        .then((res)=>{
          setUserData(res.data.userData)
        }).catch(error => console.log(error))
    },[id])

  return (
    <div className='updateUser'>
      <div className="AddUser">
      <Link to={"/"}>BACK</Link>
      <form onSubmit={updateSubmitHandler}>
        <h1>UPDATE EMPLOYEE</h1>
        <div className="add-input">
          <label htmlFor="name">Name: </label>
          <input type="text"
           id="name" 
           name="name"
           placeholder="Enter Name" 
           value={userData.name}
           onChange={inputUpdateHandler}
          />
        </div>
        <div className="add-input">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
           value={userData.email}
            onChange={inputUpdateHandler}
          />
        </div>
        <div className="add-input">
          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter phone"
           value={userData.phone}
            onChange={inputUpdateHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default UpdateUser
