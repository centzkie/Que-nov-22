import React from "react";
import Sidepanel from "../Components/Sidepanel";
import Signout from "../Components/AdminSignOutbtn";
import HistoryDBTBL from "../Components/tables/AdminTables/HistoryDB";
const HistoryDB = () => {
  return (
    <div className="history">
      <Sidepanel />
      <div className="mainContent">
        <div className="title">
          <h1>History Dashboard</h1>
        </div>
        <div className="tables">
          <HistoryDBTBL />
        </div>
      </div>
      <Signout />
    </div>
  );
};

export default HistoryDB;
