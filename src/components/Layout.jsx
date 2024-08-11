// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 overflow-auto bg-custom-bg md:bg-custom-bg bg-cover bg-center">
        <Outlet /> {/* Renders the current route's component */}
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;