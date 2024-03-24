import Logo from "../../assets/icons/logo.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";
const Footer = () => {
  return (
    <>
      <div
        className=" block md:flex w-screen h-auto md:h-[250px] bg-black relative py-8 px-[8vw]"
        id="about"
      >
        <div className=" w-[80%] h-full block md:flex items-center gap-[10%] text-white ">
          <img src={Logo} alt="" className=" hidden md:block" />
          <div className=" w-full md:w-[35%]">
            <h3 className=" text-2xl font-bold">About Schoolin</h3>
            <p className=" text-[12px] mt-2">
              A unified platform integrating tourism, community empowerment, and
              entrepreneurial activities with the overarching goal of fostering
              regional development across Indonesia
            </p>
          </div>
          <div className=" w-full md:w-[35%] mt-5 md:mt-0">
            <h3 className=" text-2xl font-bold">Address</h3>
            <p className=" text-[12px] mt-2">
              Departemen Teknik Mesin dan Industri Fakultas Teknik | Universitas
              Gadjah Mada | Jl. Grafika No. 2, Yogyakarta 55281, Indonesia
            </p>
            <h3 className=" text-2xl font-bold mt-4">Contact</h3>
            <p className=" text-[12px] mt-2">+62 812 3820 9928</p>
            <p className=" text-[12px]">kelompok14@gmail.com</p>
          </div>
        </div>
        <div className=" w-full md:w-[20%] ml-auto text-left md:text-right text-white ">
          <h3 className=" text-2xl font-bold mt-6">Social Media</h3>
          <div className=" w-full  flex gap-2 items-center justify-start md:justify-end mt-4">
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
            <img src={Youtube} alt="youtube" />
          </div>
          <div className="  h-[50%] flex items-end justify-center md:justify-end text-[10px] mt-10 md:mt-0">
            ©2023 by Group 14 Capstone Project
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
