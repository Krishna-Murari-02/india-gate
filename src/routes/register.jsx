import Button from "../components/Button";
import InputField from "../components/InputField";

const Register = () => {
  return (
    <div className="flex flex-col justify-start  w-[344px] absolute left-20 gap-7 top-40 ">
      <img
        className="w-[160px] h-[200px] ml-24"
        src="./assets/images/logo-2.png"
        alt=""
      />
      <p className="text-[24px] text-white text-center font-bold font-OpenSans">
        Enter your details to get your pledge certificate
      </p>

      <InputField text={"Enter full name"} icon={`./assets/icons/user.png`} className='!h-4 !w-4'/>
      <InputField
        text={"Enter mobile number"}
        icon={`./assets/icons/phone.png`}
      />
      <Button text={`get certificate`} />
    </div>
  );
};

export default Register;
