const Thankyou = () => {
  return (
    <div className="flex flex-col justify-start w-[344px] absolute left-20 gap-3 top-40 ">
      <img
        className="w-[160px] h-[200px] ml-24"
        src="./assets/images/logo-2.png"
        alt=""
      />
      <div className="flex justify-center items-center text-[#F5F5F5] font-bold text-[70px] font-Antonio">
        <h1 className="relative inline-block text-shadow-custom">Thank You</h1>
      </div>
      <p className="text-[24px] text-white text-center font-bold font-OpenSans">
        For pledging your support and participating in the initiative. Together,
        we are making a difference.
      </p>
      <div className="flex justify-center">
        <img
          src="./assets/icons/loading.png"
          className="h-[98px] w-[98px]"
          alt=""
        />
      </div>
      <p className="text-[18px] text-white text-center font-normal font-OpenSans">
        Generating your Certificate...
      </p>
    </div>
  );
};

export default Thankyou;