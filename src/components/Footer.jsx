const Footer = () => {
  return (
    <div className="container">
      <div className=" absolute bottom-0 left-0 w-full bg-[#682E21] bg-opacity-60 h-[75px] flex items-center justify-between px-16">
        <div className="flex justify-between text-white gap-[50px]">
          <a href="" className="font-Inter text-[16px] font-normal">About Us</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms and Conditions</a>
        </div>
        <div className="flex justify-between gap-[20px]">
          <img
            src="./assets/images/icon-one.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-two.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-three.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-four.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-five.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
