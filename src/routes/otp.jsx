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
    <div className="flex flex-col justify-start  w-[344px] absolute left-20 gap-9 top-40 ">
      <img
        className="w-[160px] h-[200px] ml-24"
        src="./assets/images/logo-2.png"
        alt=""
      />
      <p className="text-[24px] text-white text-center font-bold font-OpenSans">
        Enter the OTP sent on your registered mobile number
      </p>
      <div className="flex justify-between gap-2 md:gap-1 lg:gap-2">
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
                  md:w-[60px] lg:w-[70px] text-[#682E21] font-Antonio text-[70px] "
          />
        ))}
      </div>
      <Button text={`verify`} />
    </div>
  );
};

export default Otp;
