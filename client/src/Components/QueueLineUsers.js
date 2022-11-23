import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/QueueLineUsers.css";

const QueueLineUsers = () => {
  const [line, setLine] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/table").then((res) => {
      setLine(res.data);
    });
  }, []);

  return (
    <div className="queueline-users">
      <h1>QUEUELINE HERE</h1>
      <table className="qlinetbl">
        <thead className="qlinetbl-head">
          <tr>
            <th>QLN</th>
          </tr>
        </thead>
        <tbody className="qlinetbl-body">
          {line.map((posts, index) => (
            <tr key={index}>
              <td>{posts.ID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueueLineUsers;
