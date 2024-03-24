
import Star from "../../assets/icons/star.png";
import { Link } from "react-router-dom";
const Card_StayOption = ({ data, parameter }) => {
  
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
            <div  className=" flex justify-between">
            <h3 className=" font-bold text-xl ">Facilities</h3>
            <div className=" w-[30%] h-[28px] ml-auto  rounded-full flex border-2  border-[#939393] items-center p-1 gap-2">
            <img src={Star} className=" w-[20px] h-[18px]" alt="" />
            <p className=" font-semibold text-[16px]">{data.star}</p>
          </div>
            </div>
          
          <div className=" flex w-full h-[80px]  gap-2 mt-0">
            <div className=" w-full text-[12px] font-semibold">
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
    </>
    );
  };
  
  export default Card_StayOption;
  