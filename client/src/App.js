import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Landing from "./Pages/Landing";
import Notfound from "./Pages/Notfound";

// Components for Admin only
import AdminLogin from "./Pages/AdminLogin";
import MainDB from "./Pages/MainDB";
import AnnouncementDB from "./Pages/AnnouncementDB";
import History from "./Pages/HistoryDB";

// Components for CLient/Students only
import GenerateQLN from "./Pages/GenerateQLN";
import Transaction from "./Pages/Transaction";
import Qln from "./Pages/Qln";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Notfound />} />
        {/* Routes for CLient/Students only */}
        <Route path="/generateNumber" element={<GenerateQLN />} />
        <Route path="/generateSuccess" element={<Qln />} />
        <Route path="/transactions" element={<Transaction />} />
        {/* Routes for Admin only */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/main" element={<MainDB />} />
        <Route path="/announcement" element={<AnnouncementDB />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;
