import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Logo from "../../assets/icons/schoolin.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hal1 = ({ dataHome }) => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToScroll: 1,
    fade: false,
  };
  const showDesktop={
    slidesToShow:4,
  }
  const showPhone={
    slidesToShow:2,
  }

  return (
    <>
      <div className="h-screen w-screen bg-home bg-cover pb-[20vh] pt-[15vh] px-[20px] md:px-[8vw]">
        <div
          className="  md:w-[30vw] w-[100%] h-[42vh] items-center justify-center mx-auto  "
          data-aos="fade-up"
        >
          <img src={Logo} className=" mx-auto w-[300px] md:w-[320px]" alt="" />

          <div className=" md:w-[90%] w-[90%] h-[35px] bg-white rounded-full mt-12 md:mt-4 flex items-center px-4 mx-auto">
            <input
              type="text"
              className=" w-[80%] h-full rounded-full px-3 py-0 focus:outline-none placeholder:font-semibold"
              placeholder="Search"
            />
            <BsSearch className="w-5 h-5  ml-auto" />
          </div>
        </div>
        <div id="our" className=""></div>
        <Slider {...settings} {...showDesktop} data-aos="fade-up" className=" hidden md:block">
          {dataHome.map((data) => {
            return (
              <img
                src={data.gambar}
                className=" w-[20vw] h-[35vh] hover:-translate-y-2 hover:duration-1000"
              />
            );
          })}
        </Slider>
        <Slider {...settings} {...showPhone} data-aos="fade-up" className=" block md:hidden">
          {dataHome.map((data) => {
            return (
              <img
                src={data.gambar}
                className=" w-[20vw] h-[35vh] hover:-translate-y-2 hover:duration-1000"
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Hal1;
