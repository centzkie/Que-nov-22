import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const notFound = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    color: "red",
  };

  const button = {
    margin: "30px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#800000",
    color: "White",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div className="notfound" style={notFound}>
      <h1 style={{ FontSize: "3rem" }}>404 Not found!</h1>
      <button style={button} onClick={home}>
        Return to Home
      </button>
    </div>
  );
};

export default Notfound;
