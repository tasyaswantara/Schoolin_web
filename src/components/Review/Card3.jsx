import Star from "../../assets/icons/star.png";
const Card3 = ({ data, index }) => {
  return (
    <>
      <div className="w-[280px] h-auto relative  bg-white rounded-3xl py-4 px-[16px] text-[#4C4C4C] transition-[min-height]  duration-500 ease-in min-h-[460px]">
        <div
          className="w-full   bg-cover flex items-center h-[176px]"
          style={{ backgroundImage: `url(${data.images})` }}
        ></div>
        <div className=" w-full flex mt-4">
          <div className=" bg-[#909090] w-[60%] h-[32px] rounded-full flex justify-center items-center  px-2 text-white font-bold text-[20px] ">
            <p className="drop-shadow-subtitle">{data.title}</p>
          </div>
          <div className=" w-[30%] h-[28px] ml-auto  rounded-full flex border-2 bg-white border-[#939393] items-center p-1 gap-2">
            <img src={Star} className=" w-[20px] h-[18px]" alt="" />
            <p className=" font-semibold text-[16px]">{data.star}</p>
          </div>
        </div>
        <div className=" w-full h-[10%]  flex items-center ">
          <h2 className=" font-extrabold text-[20px]">{data.price}</h2>
          <div className=" ml-auto w-[22%] text-[14px] font-extrabold">
            {data.duration}
          </div>
        </div>
        <div className=" bg-[#707070] w-full h-[2px]"></div>
        <div className="  w-full h-[30%] mt-1">
          <h3 className=" font-bold text-xl ">Facilities</h3>
          <div className=" flex w-full h-[90px] gap-2 mt-1">
            <div className=" w-full text-[14px] font-semibold">
              <ol className="list-decimal pl-2">
                <li>{data.desc.content.desc1}</li>
                <li>{data.desc.content.desc2}</li>
                <li>{data.desc.content.desc3}</li>
                <li>{data.desc.content.desc4}</li>
                <li>{data.desc.content.desc5}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
