import React from "react";
import Sidepanel from "../Components/Sidepanel";
import Signout from "../Components/AdminSignOutbtn";
import MainDBQueueNS from "../Components/tables/AdminTables/MainDBQueueNS";
import MainDBQueueQL from "../Components/tables/AdminTables/MainDBQueueQL";

const MainDB = () => {
  return (
    <div className="main">
      <Sidepanel />

      <div className="mainContent">
        <div className="title">
          <h1>Controll Dashboard</h1>
        </div>
        <div className="tables">
          <div className="ctrlNowServing">
            <div className="head">
              <p>Now Serving...</p>
              <p>Displaying 2 of 2</p>
            </div>

            <MainDBQueueNS />
          </div>
          <div className="ctrlQueueLines">
            <div className="head">
              <p>Waiting...</p>
              <p>Displaying 3 of 24</p>
            </div>
            <MainDBQueueQL />
          </div>
        </div>
      </div>
      <div>
        <Signout />
      </div>
    </div>
  );
};

export default MainDB;
