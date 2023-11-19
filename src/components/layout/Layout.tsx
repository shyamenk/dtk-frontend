import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CalenderView from "../CalenderView";
import Summary from "../Summary";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Router>
      <section className="flex">
        <Sidebar />
        <Routes>
          <Route path="/calendar" element={<CalenderView />} />
          {/* <Route path="/appointments" element={<Appointments />} /> */}
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </section>
    </Router>
  );
};

export default Layout;
