import Button from "../components/Button";
import InputField from "../components/InputField";

const Register = () => {
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
        />
        <InputField
          text={"Enter mobile number"}
          icon={`./assets/icons/phone.png`}
        />
        <Button text={`get certificate`} className={`hidden md:flex`} />
      </div>
      <Button
        text={`get certificate`}
        className="!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden"
      />
    </>
  );
};

export default Register;
