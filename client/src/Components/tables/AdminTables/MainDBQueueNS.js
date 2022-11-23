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
export default function MainDBQueueNS() {

  const currentPage = 1;
  const postPerPage = 2;
  const [userData, setUserData] = useState([]);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    axios.get("http://localhost:3001/table2").then((res) => {
      setUserData(res.data);
    });
  });

  const deleteUser = (email) => {
    axios.delete(`http://localhost:3001/deleteServing/${email}`);
  }

  return (
    <div>
      <Table striped bordered className="text-center">
        <thead style={{ backgroundColor: "#800000", color: "white" }}>
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
                  className="transaction btn btn-success"
                  //onClick={add}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={actionBtn}
                >
                Complete
              </motion.button>
              <motion.button
                type="button"
                className="transaction btn btn-danger"
                onClick={() => {deleteUser(queue.Email)}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Delete
              </motion.button>
            </td>
          </tr>
          )})}
        </tbody>
      </Table>
    </div>
  );
}
