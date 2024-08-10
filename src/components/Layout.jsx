// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <div className="relative h-[100vh] bg-custom-bg bg-cover bg-center overflow-hidden">
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
