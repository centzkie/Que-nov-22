import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const center = {
  textAlign: "center",
};

export function QueueLanding() {
  // table with table limit and pagination button
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPost] = useState(1);
  const postPerPage = 5;
  let pages = [];

  useEffect(() => {
    axios.get("http://localhost:3001/table").then((res) => {
      setUserData(res.data);
      console.table(res.data);
    });
  });

  const deleteUser = (email) => {
    axios.delete(`http://localhost:3001/deleteUser/${email}`).then((res) => {
      console.log(res);
    });
  }

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);
  
  for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <Table striped bordered style={center}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#FFD700" }}>Queue Line Number</th>
            <th style={{ backgroundColor: "#FFD700" }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map ((queue, index) => (
            <tr key={index}>
              <td>{queue.ID}</td>
              <td>{queue.Name}</td>
              <td>
                  <button
                    type="button"
                    className="transaction btn btn-primary"
                    onClick={()=> {deleteUser(queue.Email)}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    
                  >
                  DELETE
                  </button>
                  </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page, index) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={index}
            >
              <p className="page-link" onClick={() => setCurrentPost(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
