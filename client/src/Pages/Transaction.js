import React from "react";
import Tophero from "../Components/Tophero";
import EditTransactionform from "../Components/EditTransactionform";
const Transaction = () => {
  return (
    <div className="transaction">
      <div className="header">
        <Tophero />
      </div>
      <div className="body">
        <EditTransactionform />
      </div>
    </div>
  );
};

export default Transaction;
