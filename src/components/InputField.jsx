/* eslint-disable react/prop-types */
import '../index.css'; // Import the custom CSS file
const InputField = ({ text, icon, className }) => {
  return (
    <div className="flex items-center h-[56px] w-full bg-[#ECDEDB] border-[3px] gap-3 border-[#682E21] rounded-[4px] p-3">
      <img
        src={icon}
        alt=""
        className={`w-[18px] h-[18px] ml-2  ${className}`}
      />
      <input
        type="text"
        placeholder={text}

        className={`flex-1 bg-transparent border-none px-2 py-1 rounded-[px] placeholder-custom text-[#9e5241] placeholder-custom  outline-none text-[16px] font-normal font-Inter`}
      />
    </div>
  );
};

export default InputField;
