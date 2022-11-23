import React from "react";
import Table from "react-bootstrap/Table";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const actionBtn = {
  margin: "4px 8px",
  padding: "0 10px",
  borderRadius: "5px",
  fontSize: "1.1rem",
};

export default function MainDBQueueQL() {

  const currentPage = 1;
  const postPerPage = 3;
  const [userData, setUserData] = useState([]);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);
  const [error, setError] = useState('');
  /*useEffect(() => {
    axios.get("http://localhost:3001/table").then((res) => {
      setUserData(res.data);
    });
  });  */
  useEffect(() => {
    getUsers();
  },[]);

  const getUsers = async() => {
    try{
      const response = await axios.get("http://localhost:3001/table");
        setUserData(response.data);
    }
    catch(e){
      setError(e.message);
    }
  }

  const add = (email) => {
    axios.post(`http://localhost:3001/nowServing/${email}`);  
    axios.delete(`http://localhost:3001/deleteUser/${email}`);
  }

  /*const deleteUser = (email) => {
    axios.delete(`http://localhost:3001/deleteUser/${email}`).then((res) => {
      console.log(res);
    }); */

  const deleteUser = async (email) => {
    try{
      if(window.confirm("Are you sure that you want to delete that user record")){
        const response = await axios.delete(`http://localhost:3001/deleteUser/${email}`);

        if(response.status === 200){
          alert("SUCCESS");
        }
     }
    }
    catch(e){
     setError(e.message);
    }
    getUsers();
  }
  
  return (
    <div>
      <Table striped bordered className="text-center">
        <thead style={{ backgroundColor: "#FFD700" }}>
          <tr>
            <th>Queue Line Number</th>
            <th>Transactions</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
          <tbody className="align-middle">
            {currentPost.map ((queue, index) => {
              return(
                <tr key={index}>
                  <td>{queue.ID}</td>
                  <td>{queue.Transactions}</td>
                  <td>{queue.Name}</td>
                  <td>{queue.Email}</td>
                  <td>
                  <motion.button
                    type="button"
                    className="transaction btn btn-primary"
                    onClick={()=> {add(queue.Email)}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={actionBtn}
                  >
                  Admit
                  </motion.button>
                  <motion.button
                    type="button"
                    className="transaction btn btn-danger"
                    onClick={() => {deleteUser(queue.Email)}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={actionBtn}
                  >
                    Deny
                  </motion.button>
                  </td>
                </tr>
            )})}
          </tbody>
        </Table>
    </div>
  );
}