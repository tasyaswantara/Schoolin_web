const Card = ({ data, parameter }) => {
  return (
    <>
      <div
        className={` w-full   bg-cover flex items-center h-[200px]`}
        style={{ backgroundImage: `url(${data.images})` }}
      >
        <h2
          className={` font-extrabold text-[#AFD3E3] drop-shadow-subtitle -rotate-12 ${
            data.id < 10 ? "text-[56px]" : "text-[51px]"
          }`}
        >
          {data.title}
        </h2>
      </div>
      <div className={`  w-[45%] h-[32px] rounded-full  px-2  font-bold text-[20px] ${parameter ? " bg-white text-[#45663D] " :"bg-[#909090] text-white "}`}>
        <h3 className="drop-shadow-subtitle">{data.title}</h3>
      </div>
      <div className={` w-full h-[10%]  flex items-center ${parameter ? " text-white" :"text-[#4c4c4c]"}`}>
        <h2 className=" font-extrabold text-[20px]">{data.price}</h2>
        <div className=" ml-[10px] -mt-[10px] w-[22%] text-[14px] font-extrabold">
          {data.duration}
        </div>
      </div>
      <div className={`  w-full h-[2px] ${parameter ? "bg-white":"bg-[#707070]"}`}></div>
      <div className={` w-full h-[30%] mt-1 ${parameter ? "text-white":""}`}>
        <h3 className=" font-bold text-xl">Facilities</h3>
        <div className=" flex w-full h-[80px] gap-2 mt-2">
          <div className=" w-[50%] ">
            <div className="  h-[30%] border-2 border-[#4C4C4C] rounded-full flex justify-center items-center font-semibold text-[11px]">
              {data.room}
            </div>
            <div className="  h-[65%] border-2 border-[#4C4C4C] rounded-xl mt-1 py-1 px-3 text-[11px] font-semibold">
              <p className="">{data.activity.content.act1}</p>
              <p className="">{data.activity.content.act2}</p>
            </div>
          </div>
          <div className=" w-[50%] border-2 border-[#4C4C4C] rounded-xl  pl-6 py-1 text-[11px] font-semibold">
            <ul className="list-disc">
              <li>{data.desc.content.desc1}</li>
              <li>{data.desc.content.desc2}</li>
            </ul>
          </div>
        </div>
        <div className="  h-[25px]  w-full border-2 border-[#4C4C4C] rounded-full mt-1 font-bold flex justify-center items-center text-[12px]">
          {data.other}
        </div>
      </div>
    </>
  );
};

export default Card;
