
const Card_Class = ({ data, parameter }) => {
  
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
      <div className=" w-full h-[10%]  flex items-center ">
        <h2 className=" font-extrabold text-[20px]">{data.price}</h2>
        <div className=" ml-[2px] w-[22%] text-[14px] font-bold -mt-2">
          {data.duration}
        </div>
      </div>
      <div className={`w-full h-[2px] ${parameter ?" bg-white":"bg-[#707070]"}`} ></div>
      <div className="  w-full h-[30%] mt-1">
        <h3 className=" font-bold text-xl ">Facilities</h3>
        <div className=" flex w-full h-[80px]  gap-2 mt-0">
          <div className=" w-full text-[14px] font-semibold">
            <ol className="list-decimal pl-2">
              <li>{data.desc.content.desc1}</li>
              <li>{data.desc.content.desc2}</li>
              <li>{data.desc.content.desc3}</li>
              <li>{data.desc.content.desc4}</li>
            </ol>
          </div>
        </div>
       
      </div>
  </>
  );
};

export default Card_Class;
