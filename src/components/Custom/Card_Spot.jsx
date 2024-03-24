
const Card_Spot = ({ data, parameter }) => {
  
  return (
   <>
      <div
        className="w-full   bg-cover flex items-center h-[156px] rounded-2xl"
        style={{ backgroundImage: `url(${data.images})` }}
      ></div>
      <div className=" w-full flex mt-2  justify-center items-center">
        <div className={`w-full h-[32px] rounded-full  px-2 font-extrabold text-[20px] ${parameter ? " bg-white text-[#45663D] " :"bg-[#909090] text-white "} `} >
          <p className={` text-center ${parameter ?" drop-shadow-xl":"drop-shadow-subtitle"}`}>{data.title}</p>
        </div>
      </div>
      <div className=" w-full h-[10%] mt-2  flex items-center ">
        <h2 className=" font-extrabold text-[20px]">{data.price}</h2>
        <div className=" ml-[2px] w-[22%] text-[14px] font-bold -mt-2">
          {data.duration}
        </div>
      </div>
      <div className={`w-full h-[2px] ${parameter ?" bg-white":"bg-[#707070]"}`} ></div>
     
  </>
  );
};

export default Card_Spot;
