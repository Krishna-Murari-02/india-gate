import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import axios from "../instance.js";

import { success, error } from "../helper/hottoast.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [inputObject, setInputObject] = useState({
    name: "",
    phone: "",
  });

  const buttonDisable = () => {
    if (
      inputObject.name === "" ||
      inputObject.name === " " ||
      inputObject.phone === "" ||
      inputObject.phone.length < 10
    ) {
      return true;
    }
    return false;
  };
  const registerUserDate = async () => {
    if (buttonDisable()) {
      success("Please Enter valid name and mobile number.");
      return;
    }
    try {
      const response = await axios.post("/user/register", inputObject);
      sessionStorage.setItem("user_name", response.data.msg.name);
      sessionStorage.setItem("user_phone", response.data.msg.phone);
      sessionStorage.setItem("user_isVerified", response.data.msg.isVerified);
      if (response.status === 201) {
        success("Verify Your Phone number.");
        navigate(`/verify-otp?phone=${response.data.msg.phone}`);
        return;
      }
      if (response.status === 200) {
        success("Verify Your Phone number.");

        navigate(`/verify-otp?phone=${response.data.msg.phone}`);
        return;
      }
    } catch (err) {
      sessionStorage.setItem("user_name", err.response.data.msg.name);
      sessionStorage.setItem("user_phone", err.response.data.msg.phone);
      sessionStorage.setItem(
        "user_isVerified",
        err.response.data.msg.isVerified
      );
      if (err.response.status === 409) {
        navigate("/thank-you");
        return;
      } else {
        error("Internal server error");
        return;
      }
    }
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
          Enter your details to get your pledge certificate
        </p>

        <InputField
          text={"Enter full name"}
          icon={`./assets/icons/user.png`}
          className="!h-4 !w-4"
          onChange={(e) =>
            setInputObject({ ...inputObject, name: e.target.value })
          }
        />
        <InputField
          onChange={(e) =>
            setInputObject({ ...inputObject, phone: e.target.value })
          }
          text={"Enter mobile number"}
          icon={`./assets/icons/phone.png`}
        />
        <Button
          onClick={registerUserDate}
          text={`get certificate`}
          className={`hidden md:flex`}
        />
      </div>
      <Button
        onClick={registerUserDate}
        text={`get certificate`}
        className={`!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden  `}
      />
    </>
  );
};

export default Register;
