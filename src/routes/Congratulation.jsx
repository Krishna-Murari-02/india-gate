import React, { useState } from "react";
import CertificateSidebar from "../components/CertificateSidebar";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Congratulation() {
    
  const [certificateUrl, setcertificateUrl] = useState(
    sessionStorage.getItem("user_url")
  );
  return (
    <div className="relative min-h-screen md:min-h-screen bg-custom-bg-2 md:bg-custom-bg bg-cover bg-center overflow-y-scroll">
      <CertificateSidebar certificateUrl={certificateUrl} />
      <>
        <div className="flex flex-col justify-center md:justify-start items-center w-full md:w-[344px] absolute left-0 md:left-20 gap-7 top-40 px-4 md:px-0">
          <img
            className="w-[160px] h-[200px] hidden md:flex"
            src="./assets/images/logo-2.png"
            alt=""
          />

          <div className="flex justify-center items-center text-[#F5F5F5] font-bold text-[70px] font-Antonio">
            <h1 className="relative inline-block text-shadow-custom">
              Thank You
            </h1>
          </div>
          <p className="text-[24px] text-white text-center font-bold font-OpenSans">
            You’ve taken a powerful step. We are creating a future where no
            child is left hungry. Stay connected, this is just the beginning.
          </p>
          <div className="flex justify-between gap-4 md:gap-3 lg:gap-4"></div>
        </div>
      </>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default Congratulation;
