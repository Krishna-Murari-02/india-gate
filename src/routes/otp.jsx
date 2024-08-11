import { useState } from "react";
import Button from "../components/Button";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  
  const update = (e, i) => {
    setOtp((otp) => {
      const newOtp = [...otp];
      newOtp[i] = e.target.value;
      return newOtp;
    });
  };

  const focusNext = (e) => {
    if (e.target.value.length === 1 && e.target.nextSibling)
      e.target.nextSibling.focus();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value.length === 0 &&
      e.target.previousSibling
    )
      return e.target.previousSibling.focus();
    if (e.key.length !== 1) return;
    if (Number.isNaN(Number(e.key)) || e.key === " ") e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col justify-center md:justify-start items-center w-full md:w-[344px] absolute left-0 md:left-20 gap-7 top-40 px-4 md:px-0">
        <img
          className="w-[160px] h-[200px] hidden md:flex"
          src="./assets/images/logo-2.png"
          alt=""
        />
        <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans mt-[112px] md:mt-0">
          Enter the OTP sent on your registered mobile number
        </p>
        <div className="flex justify-between gap-4 md:gap-3 lg:gap-4">
          {otp.map((n, i) => (
            <input
              key={i}
              type="text"
              value={otp[i]}
              maxLength={1}
              inputMode="numeric"
              onInput={focusNext}
              autoFocus={n === 1}
              onKeyDown={handleKeyDown}
              onChange={(e) => update(e, i)}
              className="w-[60px] h-[100px] rounded-lg border border-true-gray-200
                p-2 text-center font-bold leading-8 
                focus:border-primary focus:ring-0 
                md:w-[60px] lg:w-[70px] text-[#682E21] font-Antonio text-[70px] bg-[#ECDEDB]"
            />
          ))}
        </div>
        <Button text={`verify`} className={`hidden md:flex`} />
      </div>
      <Button
        text={`verify`}
        className="!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden"
      />
    </>
  );
};

export default Otp;