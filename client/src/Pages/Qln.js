import React from "react";
import Tophero from "../Components/Tophero";
import QueueSuccess from "../Components/QueueSuccess";

const Qln = () => {
  return (
    <div className="queueline-number">
      <div className="header">
        <Tophero />
      </div>
      <div className="body">
        <QueueSuccess />
      </div>
    </div>
  );
};

export default Qln;
