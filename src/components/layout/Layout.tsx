import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appointments from "../Appointments";
import Calendar from "../Calendar";
import Summary from "../Summary";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Router>
      <section className="flex">
        <Sidebar />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </section>
    </Router>
  );
};

export default Layout;
