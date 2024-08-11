// src/pages/Home.jsx
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center md:items-start md:justify-start w-full h-full z-50 gap-9 px-4 md:px-0 bg-black bg-opacity-70">
      <img
        className="w-[160px] h-[200px] hidden md:flex"
        src="./assets/images/logo-2.png"
        alt=""
      />
      <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans">
        Imagine a world where every meal brings hope. Take the pledge & give
        them #FreedomFromHunger <br /> With every pledge, a child gets a
        meal.
      </p>
      <Button text={`pledge now`} className={`hidden md:flex`} />
      <Button text={`pledge now`} className="!w-[80%] !mx-auto md:hidden z-50" />
    </div>
  );
};

export default Home;