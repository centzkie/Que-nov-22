import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const QueueSuccess = () => {
  const navigate = useNavigate();
  const done = () => {
    navigate("/");
  };

  const style = {
    color: "red",
  };
  return (
    <div className="queueSuccess">
      <div className="top">
        <h3>You are:</h3>
      </div>
      <div className="number">
        <h1>01</h1>
      </div>
      <div className="note">
        <p>thank you for using our QMS</p>
        <p>
          <span style={style}>*</span>Please do a screenshot to remember your
          QLN
        </p>
      </div>
      <div className="button">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={done}
        >
          Done
        </motion.button>
      </div>
    </div>
  );
};

export default QueueSuccess;
