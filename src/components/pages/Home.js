import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
   const[users, setUsers] = useState([]);

    useEffect(()=>{
       // console.log("This is use effect");
        loadUsers();
    },[]);

    const loadUsers = async  ()=>{
        const result = await axios.get("http://localhost:9999/api/users");
        console.log(result.data);
        setUsers(result.data);

    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:9999/api/users/${id}`);
        loadUsers();
    }
  return (
    <div className="container">
    <div className="py-4">
      <h1>Student Information</h1>
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.course}</td>
              <td>{user.email}</td>
              <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/users/edit/${user._id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Home;
