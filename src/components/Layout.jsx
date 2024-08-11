// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div className="relative min-h-svh  md:min-h-screen bg-custom-bg bg-cover bg-center overflowauto">
        {/* <div className="absolute bg-girl bg-center bg-contain bg-no-repeat h-[88%] w-[95%] mt-[150px] ml-[150px]"></div> */}
          <Outlet />
        <Footer />
      </div>

    </div>
  );
};

export default Layout;
