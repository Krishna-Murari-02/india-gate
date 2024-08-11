import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]  absolute left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
      <img
        className="w-[160px] h-[200px] ml-24 hidden md:flex"
        src="./assets/images/logo-2.png"
        alt=""
      />
      <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans mt-[65px] md:mt-0">
        Imagine a world where every meal brings hope. Take the pledge & give
        them #FreedomFromHunger <br></br> With every pledge, a child gets a meal.
      </p>
      <Button text={`pledge now`} className={`hidden md:flex`} />
    </div>
  );
};

export default Home;
