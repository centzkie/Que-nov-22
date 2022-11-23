import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios'

const EditTransactionform = () => {
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
  };

  const colorReq = {
    color: "red",
  };

  const submitHandler = (e) =>{
    e.preventDefault();
  }

 

  const [search,setSearch] = useState([]);
  const [name,setName] = useState();
  const [newname,setNewname] = useState('');
  const [newtransaction,setNewtransaction] = useState();
  const info = []
  let names = ""
  let transactions = ""


  const searchUser = () => {
    Axios.get(`http://localhost:3001/update/${name}`).then ((response) => {
      setSearch(response.data);
    });
  }

  const updateUser = () => {
    if(newname.length === 0){
      names = info[0];
    }
    else{
      names = newname;
    } 
    if(newtransaction === "" || newtransaction === "Accreditation of Subjects"){
      transactions = info[2];
    }
    else{
      transactions = newtransaction;
    }

    Axios.put('http://localhost:3001/updateUser', {
      newname: names,
      newemail: info[1],
      newtransaction: transactions 
    }).then((response) =>{
      console.log(response)
      alert("Successfully update")
    })
    
  };

  return (
    <div>
      <div className="editForm">
        <h1>Edit Transaction</h1>
        <form action="" className="newform" onSubmit={submitHandler}>
          <div className="email">
            <label htmlFor="Email" className="label">
              Email<span style={colorReq}>*</span>
            </label>
            <input type="search" required placeholder="Ex. Juan Cruz@yahoo.com" onChange={(event) => {setName(event.target.value);}}/>
            <button onClick={() => {searchUser(name)}} >search</button>
          </div>
          <div className="transactions">
            <label htmlFor="transaction">
              Transaction <span style={colorReq}>*</span>
            </label>
            <select  value = 'info[2]' name="transactions" id="transactions" on onChange={(e) =>{
              const selectedTransaction=e.target.value;
              setNewtransaction(selectedTransaction);
          }}>
              <option value="a" disabled selected hidden>
                Head of Academic Transactions
              </option>
              <option value="Accreditation of Subjects">Accreditation of Subjects</option>
              <option value="Adding/Changing of Subjects">Adding/Changing of Subjects</option>
              <option value="Overload">Overload</option>
              <option value="Online request for petition">Online request for petition</option>
              <option value="Cross-Enrollment">Cross-Enrollment</option>
            </select>
          </div>

          <div className="input-name">
            <label htmlFor="Name" className="label">
              Name<span style={colorReq}>*</span>
            </label>
            <input type="text" placeholder="Ex. Juan Cruz" defaultValue={info[0]}onChange={(event) => {setNewname(event.target.value);}} />
          
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
              type="button"
              className="submit"
              onClick={updateUser}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Update
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionform;
