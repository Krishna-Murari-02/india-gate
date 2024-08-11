import { useState } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)

  const toggleMenu = () => {
    console.log('object')
    setIsMenuOpen(prev => !prev);
  };
  return (
    <div className="flex flex-col mt-[37px]">
      <div className="flex justify-between px-6 h-full">
        <img
          className="h-[70px] w-[65px] flex md:hidden self-center"
          src="./assets/images/logo-2.png"
          alt=""
        />

        <img
          src="./assets/icons/menu-btn.png"
          className="h-[44px] w-[44px] flex md:hidden self-center"
          alt="Menu"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="fixed top-15 right-3 mt-16 mr-4 bg-white shadow-lg rounded-xl w-[200px] p-4 z-50">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#link1" className="text-black text-lg">
               About us
              </a>
            </li>
            <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
            <li>
              <a href="#link2" className="text-black text-lg">
              Privacy Policy
              </a>
            </li>
            <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
            <li>
              <a href="#link2" className="text-black text-lg">
              T&C
              </a>
            </li>
          </ul>
        </div>
      )}
      <img
        src="./assets/images/logo-1.png"
        className="h-[98px] w-[94px] flex md:hidden self-center mt-auto"
        alt=""
      />
      <div className="flex justify-center items-center text-[#F5F5F5] text-[38px] sm:text-[45px] md:text-[55px] font-Antonio px-4 sm:px-6">
        <h1 className="relative inline-block text-shadow-custom text-center">
          #FreedomFromHunger
        </h1>
      </div>

      {/* Bottom div */}
      <div className="flex justify-center items-center flex-col w-full md:w-[33%] absolute md:right-1 bottom-28 md:bottom-0 md:top-[-46px] gap-5">
        <div className="flex flex-col gap-24 text-center text-white items-end">
          <img
            src="./assets/images/logo-1.png"
            className="h-[250px] w-[250px] hidden md:flex "
            alt=""
          />
          <div className="text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
            <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
              Pledges so far
            </p>
            <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
              <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
                99572
              </p>
              <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
                and counting...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
