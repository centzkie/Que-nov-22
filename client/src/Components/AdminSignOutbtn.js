import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";

const AdminSignOutbtn = () => {
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/admin");
  };
  return (
    <motion.div
      className="signout"
      whileHover={{ scale: 1.4, rotate: -360 }}
      whileTap={{ scale: 0.9 }}
      onClick={signOut}
    >
      <AiOutlinePoweroff />
    </motion.div>
  );
};

export default AdminSignOutbtn;
