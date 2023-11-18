import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appointments from "../Appointments";
import Calendar from "../Calendar";
import Summary from "../Summary";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
