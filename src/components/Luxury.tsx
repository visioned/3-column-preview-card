import luxury from "../assets/icon-luxury.svg";
export const Luxury = () => {
  return (
    <div className="h-[442px] w-[327px] lg:h-[500px] lg:w-[307px] bg-[#00403f] rounded-b-lg lg:rounded-b-none lg:rounded-tr-lg lg:rounded-br-lg  ">
      <div className="p-[48px]">
        <img src={luxury} alt="" />
        <h1 className="uppercase mt-[28px] font-bold font-shoulder text-[40px]">
          luxury
        </h1>
        <p className="mt-[28px] mr-8 lg:mr-0 text-[15px] leading-[24px] lg:tracking-wider">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="h-[48px] w-[147px] bg-[#fff] rounded-full mt-[28px] lg:mt-[86px] text-[#00403f] hover:border-2 hover:border-white hover:bg-[#00403f] hover:text-white ">
          Learn More
        </button>
      </div>
    </div>
  );
};
