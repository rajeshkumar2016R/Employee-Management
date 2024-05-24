import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./User.css";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUser] = useState([]);


  const getData = async () => {
    const res = await axios.get("http://localhost:8000/get");
    console.log(res.data.userData);
    setUser(res.data.userData);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = async(id)=>{
    const res = await axios.delete("http://localhost:8000/delete/"+id)
    toast.success(res.data.message, {position:"top-center"})
    getData();
  }
  return (
    <div className="user">
      <h1>EMPLOYEE MANAGEMENT</h1>
      <Link to={"/add"} className="add-employee">
        ADD EMPLOYEE
      </Link>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>SL.NO.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE NO.</th>
              <th>EDIT | DELETE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((element,i) => {
              return (
                <tr key={i}>
                  <td key={users._id}>{i+1}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                  <td>
                  <Link to={"/edit/"+element._id} className="edit"><i class="fa-solid fa-pen-to-square"></i></Link>
                    <button className="edit" onClick={()=>deleteHandler(element._id)}><i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
