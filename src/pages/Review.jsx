import { StayOption } from "../components/utils/StayOption";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/partials/Navbar";
import Card3 from "../components/Review/Card3";

import People from "../assets/icons/people.png"
import Rating from "../assets/icons/ratingstar.png"
import Rev from "../assets/images/rev1.png"

const Review = () => {
    const {id_review}= useParams();
    const [isClicked, setIsClicked] = useState(parseInt(id_review-1));
    const handleClick = (index) => {
        setIsClicked(isClicked === index ? null : index);
      };
      useEffect(() => {
        AOS.init({
          delay: 100,
          duration: 1000,
          easing: "ease-in-sine",
        });
    
      }, []);
   
    return ( 
        <>
        <Navbar/>
        <div className=" w-screen h-screen bg-[#025061] block md:flex gap-[4vw]">
        <div className=" w-full md:w-[30vw] h-full bg-cover bg-bg_review py-[12vh] overflow-y-auto scrollgray px-[3vw] md:px-0">
       
            <h3 className="font-extrabold text-5xl text-white  ml-[5vw] drop-shadow-nav mb-[5vh] " >Review</h3>
            
            {StayOption.map((data,index)=>{
                return(
                    <>
                     <div className={`bg-white w-full md:w-[70%] h-[55px] rounded-3xl mx-auto  flex justify-center items-center  shadow-card-shadow cursor-pointer mt-6 ${isClicked === index? "hidden":"block"}`}   onClick={() => handleClick(index)}>
            <p className="font-extrabold text-[#4E4E4E] drop-shadow-subtitle text-2xl " >{data.title}</p>
            </div>
            <div className={`mx-auto w-full  md:w-[80%] flex justify-center items-center cursor-pointer mt-6 ${ isClicked === index ? "block" : "hidden"}`}   onClick={() => handleClick(index)}>
            <Card3 data={data} index={index} />
            </div>
                    </>
                )
            })}
       
          
           
            
        </div>
        <div className=" w-full md:w-[60vw] h-[75vh]  my-auto block md:flex gap-8 flex-wrap overflow-y-auto scrollgray mt-0 md:mt-[20vh] bg-[#025061] px-[3vw] md:px-0 py-[5vh] md:py-0">
        <div className=" w-full md:w-[45%] h-min flex gap-4 py-5 " >
                <div className=" w-[20%] text-white ">
                    <img className=" mx-auto" src={People} alt="" />
                    <h3 className=" text-center font-semibold">Akin</h3>
                </div>
                <div className="w-[70%] h-min bg-white rounded-3xl shadow-card-shadow p-8 font-medium text-[16px] relative" >
                The facilities provided for this price are quite worth it i think
                
                    <img className=" mt-4 ml-auto" src={Rating} alt="" />
                
                </div>
                
            </div>
            <div className=" w-full md:w-[45%] h-min  flex gap-4 py-5 " >
                <div className=" w-[20%] text-white ">
                    <img className=" mx-auto" src={People} alt="" />
                    <h3 className=" text-center font-semibold">Ikan</h3>
                </div>
                <div className="w-[70%] h-min bg-white rounded-3xl shadow-card-shadow p-8 font-medium text-[16px] relative" >
                If you can, add more facilities, that'd be awesome!
                
                    <img className=" mt-4 ml-auto" src={Rating} alt="" />
                
                </div>
                
            </div>
            
            <div className=" w-full md:w-[45%] h-min  flex gap-4 py-5 " >
                <div className=" w-[20%] text-white ">
                    <img className=" mx-auto" src={People} alt="" />
                    <h3 className=" text-center font-semibold">Akin</h3>
                </div>
                <div className="w-[70%] h-min bg-white rounded-3xl shadow-card-shadow p-8 font-medium text-[16px] relative" >
                The bed is a bit old-fashioned but still comfy, and the fan isn't super strong, but it keeps the room at a comfortable temperature. It's a good deal for the price.
                <div className=" w-full h-[100px]  mt-2 rounded-2xl bg-cover flex justify-center items-center text-white font-semibold text-[16px]"  style={{ backgroundImage: `url(${Rev})` }}>10+ photos</div>
                    <img className=" mt-4 ml-auto" src={Rating} alt="" />
                
                </div>
                
            </div>
            <div className=" w-full md:w-[45%] h-min  gap-4 py-5 ">
            <div className=" h-min  flex gap-4  " >
                <div className=" w-[20%] text-white ">
                    <img className=" mx-auto" src={People} alt="" />
                    <h3 className=" text-center font-semibold">Naki</h3>
                </div>
                <div className="w-[70%] h-min bg-white rounded-3xl shadow-card-shadow p-8 font-medium text-[16px] relative" >
                The place to crash is legit, folks here are super chill. I'm totally comfy here, and the price is fair too.
                
                    <img className=" mt-4 ml-auto" src={Rating} alt="" />
                
                </div>
                
            </div>
            <div className="h-min  flex gap-4 py-5 " >
                <div className=" w-[20%] text-white ">
                    <img className=" mx-auto" src={People} alt="" />
                    <h3 className=" text-center font-semibold">Naka</h3>
                </div>
                <div className="w-[70%] h-min bg-white rounded-3xl shadow-card-shadow p-8 font-medium text-[16px] relative" >
                Good. 8/10
                
                    <img className=" mt-4 ml-auto" src={Rating} alt="" />
                
                </div>
                
            </div>
            </div>
           
            
           
                
            
            
        </div>
        </div>
        </>
     );
}
 
export default Review;