import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="flex flex-col mt-[37px]">
      {/* Top div */}
      <img
        src="./assets/images/logo-1.png"
        className="h-[98px] w-[94px] flex md:hidden"
        alt=""
      />
      <div className="flex justify-center items-center text-[#F5F5F5] text-[55px] font-Antonio">
        <h1 className="relative inline-block text-shadow-custom">
          #FreedomFromHunger
        </h1>
      </div>

      {/* Bottom div */}
      <div className="flex justify-center items-center flex-col w-full md:w-[33%] absolute md:right-2 bottom-12 md:bottom-0 md:top-[-160px] gap-5">
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
        <Button text={`pledge now`} className="flex md:hidden w-[80%]" />
      </div>
    </div>
  );
};

export default Sidebar;
