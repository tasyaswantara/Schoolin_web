import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Card from "../components/Paket/Card";
import { Offers } from "../components/utils/Offers";
import { Emotional } from "../components/utils/Emotional";

const Paket = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(Emotional);
  const [todos2, setTodos2] = useState(Offers);

  const onSubmit = (e) => {
    e.preventDefault();
    const selectedOptions = [];
    for (const todo of todos) {
      if (todo.selected) {
        selectedOptions.push(` ${todo.title}`);
      }
    }
    for (const todo of todos2) {
      if (todo.selected) {
        selectedOptions.push(`  ${todo.title}`);
      }
    }
    const phoneNumber = "+6281238209928";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      "Halo Schoolin! saya " +
        name +
        " ingin pesan" +
        selectedOptions.join(" ,")
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const todoClicked = (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === parseInt(e.target.getAttribute("data-id"), 10)
          ? { ...todo, selected: !todo.selected }
          : todo
      )
    );
  };

  const todoClicked2 = (e) => {
    setTodos2(
      todos2.map((todo) =>
        todo.id === parseInt(e.target.getAttribute("data-id"), 10)
          ? { ...todo, selected: !todo.selected }
          : todo
      )
    );
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
      <Navbar />

      <div className=" w-full overflow-x-hidden">
        <div
          data-aos="fade-up"
          className=" w-screen h-fit min-h-fit  md:min-h-[730px] md:h-fit bg-bg_blur bg-cover pb-4 "
        >
          <div className=" w-screen h-[160px] bg-bg_listputih bg-cover px-[8vw] pt-[70px] md:pt-[10vh]">
            <h2
              data-aos="fade-up"
              className=" text-xl md:text-4xl font-extrabold text-[#007C98] drop-shadow-title"
            >
              The Ultimate Adventure Pack
            </h2>
            <h3
              data-aos="fade-up"
              className=" text-[16px] md:text-2xl font-medium text-[#007C98] drop-shadow-title"
            >
              A rugged, all-weather backpack to carry all your gear
            </h3>
          </div>
          <div className=" bg-white w-full h-[15px]"></div>
          <div className=" max-w-[88vw] 2xl:max-w-[86vw] max-h-[63vh]  md:max-h-[70vh] mt-[3vh]  flex flex-wrap gap-[1vw] mx-auto  overflow-y-auto scrollgray ">
            <div className=" w-[70%] min-w-fit h-auto ">
              <div className=" w-[100%] md:w-[600px] h-[120px] flex items-center  text-center md:text-left bg-[#007C98] rounded-t-[30px] px-[20px] text-2xl md:text-5xl font-extrabold text-white">
                <p className="drop-shadow-title">
                  Emotional Intelligence Package
                </p>
              </div>
              <div className=" w-full md:max-w-[920px] h-auto bg-[#007C98]  md:rounded-tr-[30px] rounded-b-[30px] flex flex-wrap justify-center md:justify-start  gap-[20px] py-1 pb-[5vh]  md:py-[5vh] px-[20px]">
                {todos.map((todo) => (
                  <div
                    onClick={todoClicked}
                    data-id={todo.id}
                    key={todo.id}
                    className={`w-[280px] h-auto mt-4 md:mt-0  rounded-3xl py-4 px-[16px] text-[#4C4C4C] min-h-[460px] todoDiv ${
                      todo.selected ? " selected " : " bg-white"
                    }`}
                  >
                    <Card data={todo} parameter={todo.selected} />
                    <div
                      onClick={todoClicked}
                      data-id={todo.id}
                      key={todo.id}
                      className={`todoDiv mt-4 h-[25px]  w-full border-2 border-[#4C4C4C] bg-[#d9d9d9] text-black rounded-full font-bold flex justify-center items-center text-[12px] ${
                        todo.selected ? " selected text-white" : ""
                      }`}
                    >
                      Pilih paket ini
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-[90%] min-w-fit h-auto mt-[5vh] ">
              <div className=" w-[100%] md:w-[600px] h-[120px] flex items-center  text-center md:text-left  bg-[#007C98] rounded-t-[30px] px-[20px] text-2xl md:text-5xl font-extrabold text-white ">
                <p className="drop-shadow-title">Learn & Refreshing Package</p>
              </div>
              <div className="  w-full md:max-w-[1192px] h-auto bg-[#007C98] md:rounded-tr-[30px] rounded-b-[30px] flex flex-wrap justify-center md:justify-start  gap-[10px] pt-1 pb-[5vh]  md:py-[5vh] px-[20px]">
                {todos2.map((todo) => (
                  <div
                    onClick={todoClicked}
                    data-id={todo.id}
                    key={todo.id}
                    className={`w-[280px] h-auto   rounded-3xl py-4 px-[16px] text-[#4C4C4C] min-h-[460px] todoDiv ${
                      todo.selected ? " selected " : " bg-white"
                    }`}
                  >
                    <Card data={todo} parameter={todo.selected} />
                    <div
                      onClick={todoClicked2}
                      data-id={todo.id}
                      key={todo.id}
                      className={`todoDiv mt-4 h-[25px]  w-full border-2 border-[#4C4C4C] bg-[#d9d9d9] text-black rounded-full font-bold flex justify-center items-center text-[12px] ${
                        todo.selected ? " selected text-white" : ""
                      }`}
                    >
                      Pilih paket ini
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="  w-full h-[50px] max-w-[88vw] 2xl:max-w-[86vw]  mx-auto flex justify-end items-center p-1 mt-10 md:mt-6">
            <form
              onSubmit={onSubmit}
              className=" w-full md:w-[30%] h-full flex gap-4 text-white text-[16px] mb-4 2xl:mb-0"
            >
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                type="text"
                className=" focus:outline-none  bg-gray-400 rounded-full w-[60%] h-full placeholder:text-white placeholder:text-center drop-shadow-nav px-6"
                placeholder="Your Name"
              />
              <input
                type="submit"
                value="Order"
                className="bg-gray-400 rounded-full w-[40%] h-full text-white flex justify-center items-center font-extrabold drop-shadow-nav cursor-pointer"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Paket;
