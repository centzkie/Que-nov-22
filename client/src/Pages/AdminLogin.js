import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import "../Css/AdminLogin.css";
import Logo from "../Image/seal.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const mainDbAccess = () => {
    navigate("/main");
  };

  return (
    <div className="adminLogin">
      <div className="hero">
        <div>
          <motion.img
            src={Logo}
            alt=""
            className="Logo"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15 }}
          />
        </div>
        <div className="title">
          <div>queue</div>
          <div>management</div>
          <div>system</div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "300",
              textTransform: "lowercase",
            }}
          >
            Office of Academic Head Program
          </div>
        </div>
      </div>

      <div className="side">
        <form action="" className="newform">
          <h3>log in</h3>
          <div className="txtfields">
            <input
              type="text"
              placeholder="Username"
              id="username"
              maxlength="20"
              required
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              maxlength="20"
              required
            />
          </div>
          <div className="btn">
            <motion.button
              type="button"
              className="cancel"
              id="cancelbtn"
              onClick={home}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="button"
              className="submit"
              id="submitbtn"
              onClick={mainDbAccess}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
