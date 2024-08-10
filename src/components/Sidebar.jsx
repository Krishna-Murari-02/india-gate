const Sidebar = () => {
  return (
    <div className="flex flex-col mt-[37px]">
      {/* Top div */}
      <div className="flex justify-center items-center text-[#F5F5F5] text-[55px] font-Antonio">
        <h1 className="relative inline-block text-shadow-custom">
          #FreedomFromHunger
        </h1>
      </div>

      {/* Bottom div */}
      <div className="flex justify-end  w-[50%] absolute right-20 top-40 ">
        <div className="flex flex-col gap-24 text-center text-white items-end">
          <img
            src="./assets/images/logo-1.png"
            className="h-[250px] w-[250px]"
            alt=""
          />
          <div className="text-white text-right">
            <p className="text-white font-Inter text-[20px] font-bold ">
              Pledges so far
            </p>
            <div className="flex flex-col mt-[-20px]">
            <p className="text-shadow-custom text-[120px] font-bold font-Antonio h-[160px]">
              99572
            </p>
            <p className="text-white font-Inter text-[20px] font-bold">
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
