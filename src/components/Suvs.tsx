import suvs from "../assets/icon-suvs.svg";
export const Suvs = () => {
  return (
    <div className="h-[442px] w-[327px] lg:h-[500px] lg:w-[307px] bg-[#016972] ">
      <div className="p-[48px]">
        <img src={suvs} alt="" />
        <h1 className="uppercase mt-[28px] font-bold font-shoulder text-[40px]">
          suvs
        </h1>
        <p className="mt-[28px] mr-8 text-[15px] leading-[24px] lg:tracking-wider lg:mr-[2px]">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.  
        </p>
        <button className="h-[48px] w-[147px] bg-[#fff] rounded-full mt-[28px] lg:mt-[86px] text-[#016972] hover:border-2 hover:border-white hover:bg-[#016972] hover:text-white ">
          Learn More
        </button>
      </div>
    </div>
  );
};
