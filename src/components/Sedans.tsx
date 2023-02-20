import sedan from "../assets/icon-sedans.svg";
export const Sedans = () => {
  return (
    <div className="h-[442px] w-[327px] lg:h-[500px] lg:w-[307px] bg-[#e28525] rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg lg:rounded-bl-lg ">
      <div className="p-[48px]">
        <img src={sedan} alt="" />
        <h1 className="uppercase mt-[28px] font-bold font-shoulder text-[40px]">sedans</h1>
        <p className="mt-[28px] mr-8 lg:mr-6 text-[15px] leading-[24px] lg:tracking-wider">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="h-[48px] w-[147px] bg-[#fff] rounded-full mt-[28px] lg:mt-[66px] text-[#e28525] hover:border-2 hover:border-white hover:bg-[#e28525] hover:text-white ">
          Learn More
        </button>
      </div>
    </div>
  );
};
