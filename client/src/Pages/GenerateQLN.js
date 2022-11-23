import React from "react";
import Tophero from "../Components/Tophero";
import GenerateForm from "../Components/GenerateForm";

const GenerateQLN = () => {
  return (
    <div className="generate-queue-line">
      <div className="header">
        <Tophero className="tophero" />
      </div>
      <div className="body">
        <GenerateForm className="generateform" />
      </div>
    </div>
  );
};

export default GenerateQLN;
