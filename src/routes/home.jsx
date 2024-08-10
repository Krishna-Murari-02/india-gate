import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-start  w-[344px] absolute left-28 gap-9 top-40 ">
      <img
        className="w-[160px] h-[200px] ml-24"
        src="./assets/images/logo-2.png"
        alt=""
      />
      <p className="text-[24px] text-white text-center font-bold font-OpenSans">
        Imagine a world where every meal brings hope. Take the pledge & give
        them #FreedomFromHunger <br></br> With every pledge, a child gets a meal.
      </p>
      <Button text={`pledge now`}/>
    </div>
  );
};

export default Home;
