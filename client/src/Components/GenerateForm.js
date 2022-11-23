import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios'
import Qln from "../Pages/Qln";

const GenerateForm = () => {

  const navigate = useNavigate();
  
  const cancel = () => {
    navigate("/");
  };

  const colorReq = {
    color: "red",
  };

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [transaction,setTransaction] = useState("");
  const [error,setError] = useState(false)
  
  const add = () => {
    
    if(email === "" || name === "" || transaction === "")
    {
      alert("Please fill all the blanks")
    }
    else{
      Axios.post('http://localhost:3001/create', {
      name: name,
      email: email,
      transaction: transaction,
      }).then(() => {
        console.log("success");
      });

      navigate("/generateSuccess");
    }
  } 

  const validation =(e) => {
    if(name.length === 0 || transaction.length === 0 || email.length === 0)
    {
      setError(true)
    }
    e.preventDefault()
  }

  return (
    <div className="form">
      <h1>Generate Queue Line number</h1>
      <form action="" className="newform" onSubmit={validation}>
        <div className="transactions">
          <label htmlFor="transaction">
            Transaction <span style={colorReq}>*</span>
          </label>
          <select  required name="transactions" id="transactions" on onChange={(e) =>{
              const selectedTransaction=e.target.value;
              setTransaction(selectedTransaction);
          }}>
            <option value="a" disabled selected hidden>
              Head of Academic Transactions
            </option>
            <option value="Accreditation of Subjects">Accreditation of Subjects</option>
            <option value="Adding/Changing of Subjects">
              Adding/Changing of Subjects
            </option>
            <option value="Overload">Overload</option>
            <option value="Online request for petition">Online request for petition</option>
            <option value="Cross-enrollment">Cross-Enrollment</option>
          </select>
        </div>

        <div className="email">
          <label htmlFor="Email" className="label">
            Email<span style={colorReq}>*</span>
          </label>
          <input id = "email" type="email" required placeholder="Ex. Juan Cruz@yahoo.com" onChange={(event) => {setEmail(event.target.value);}}/>
        </div>

        <div className="input-name">
          <label htmlFor="Name" className="label">
            Name<span style={colorReq}>*</span>
          </label>
          <input id = "name" enabled type="text" required placeholder="Ex. Juan Cruz" onChange={(event) => {setName(event.target.value);}}/>
        </div>

        <div className="generateQLNbtn">
          <motion.button
            type="button"
            onClick={cancel}
            
            className="cancel"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="submit"
            onClick={add}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </div>      
      </form>
    </div> 
  );
};

export default GenerateForm;