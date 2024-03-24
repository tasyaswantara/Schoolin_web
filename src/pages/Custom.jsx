import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Card_Class from "../components/Custom/Card_Class";
import Card_Spot from "../components/Custom/Card_Spot";
import Card_StayOption from "../components/Custom/Card_StayOption";
import Arrow from "../assets/icons/arrow_next.png";
import ArrowBack from "../assets/icons/arrow_back.png";

import { StayOption } from "../components/utils/StayOption";
import { ClassOption } from "../components/utils/ClassOption";
import { SpotOption } from "../components/utils/SpotOption";

const Custom = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(ClassOption);
  const [todos2, setTodos2] = useState(SpotOption);
  const [todos3, setTodos3] = useState(StayOption);

  const [counts, setCounts] = useState({
    todos2: Array(todos2.length).fill(0), // Initialize counts for todos2 with zeros
    todos3: Array(todos3.length).fill(0), // Initialize counts for todos3 with zeros
  });

  const handleIncrement = (category, index) => {
    const updatedCounts = { ...counts };
    updatedCounts[category][index] += 1;
    setCounts(updatedCounts);
  };

  const handleDecrement = (category, index) => {
    const updatedCounts = { ...counts };
    if (updatedCounts[category][index] > 0) {
      updatedCounts[category][index] -= 1;
      setCounts(updatedCounts);
    }
  };

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
        selectedOptions.push(` ${counts.todos2[todo.id - 1]} ${todo.title}`);
      }
    }
    for (const todo of todos3) {
      if (todo.selected) {
        selectedOptions.push(` ${counts.todos3[todo.id - 1]} ${todo.title}`);
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
  const todoClicked3 = (e) => {
    setTodos3(
      todos3.map((todo) =>
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
      <div id="sect1"></div>
      <div className=" w-full overflow-hidden">
        <div
          data-aos="fade-up"
          className=" w-screen h-fit min-h-fit  md:min-h-[730px] md:h-fit bg-bg_blur bg-cover mt-4 pb-[2vh] md:pb-0"
        >
          <div className=" w-screen h-[50px] md:h-[160px]  bg-bg_listputih bg-cover px-[8vw] pt-[1vh] mt-[10vh] md:mt-0 md:pt-[10vh] ">
            <div>
              <h2
                data-aos="fade-up"
                className=" text-2xl md:text-5xl font-extrabold text-[#4E4E4E] drop-shadow-title"
              >
                Class Options
              </h2>
            </div>
          </div>
          <div className=" bg-white w-full h-[15px]"></div>
          <div className=" max-w-[88vw]  2xl:max-w-[84vw] max-h-fit 2xl:max-h-[65vh] mt-[1vh]  flex  gap-[4vw] mx-auto  overflow-x-auto scrollgray py-4 pb-6">
            {todos.map((todo) => (
              <div
                onClick={todoClicked}
                data-id={todo.id}
                key={todo.id}
                className={`w-[280px] min-w-[270px] min-h-[410px] h-auto relative  bg-white rounded-3xl py-4 px-[20px] text-[#4C4C4C] transition-[min-height]  duration-500 ease-in  todoDiv ${
                  todo.selected ? " selected text-white" : " bg-white"
                }`}
              >
                <Card_Class
                  data={todo}
                  onClick={todoClicked}
                  parameter={todo.selected}
                />
                <div
                  onClick={todoClicked}
                  data-id={todo.id}
                  key={todo.id}
                  className={`todoDiv mt-2 h-[18px] text-center text-[12px] w-full rounded-full flex justify-center items-center font-semibold border-2 border-[#909090] `}
                >
                  Pilih
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full h-[50px] px-[8vw]  justify-end mt-[1vh] md:mt-0 mb-[2vh] flex">
            <Link
              to="sect2"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className=" bg-[#00829f] w-[120px] mt-[10px] h-full rounded-full flex items-center justify-between px-4 py-2">
                <p className="font-extrabold text-[20px] drop-shadow-xl text-white">
                  Next
                </p>
                <img src={Arrow} className=" h-full mt-1" alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div id="sect2"></div>
        <div
          data-aos="fade-up"
          className="w-screen h-fit min-h-fit  md:min-h-[730px] md:h-fit bg-bg_blur bg-cover mt-4 pb-[2vh] md:pb-0"
        >
          <div className=" w-screen h-[50px] md:h-[160px]  bg-bg_listputih bg-cover px-[8vw] flex items-center">
            <div>
              <h2
                data-aos="fade-up"
                className=" text-2xl md:text-5xl font-extrabold text-[#4E4E4E] drop-shadow-title"
              >
                Spot Options
              </h2>
            </div>
          </div>
          <div className=" bg-white w-full h-[15px]"></div>
          <div className=" max-w-[88vw] 2xl:max-w-[84vw] max-h-[63vh] 2xl:max-h-[65vh] md:max-h-[70vh] mt-[2vh] md:min-h-[450px]  flex  gap-[4vw] mx-auto  overflow-x-auto scrollgray py-4 pb-6">
            {todos2.map((todo, index) => (
              <>
                <div className=" w-full">
                  <div
                    onClick={todoClicked2}
                    data-id={todo.id}
                    key={todo.id}
                    className={`w-[270px] min-w-[270px] min-h-[300px] h-auto relative  bg-white rounded-3xl py-4 px-[20px] text-[#4C4C4C] transition-[min-height]  duration-500 ease-in  todoDiv ${
                      todo.selected ? " selected text-white" : " bg-white"
                    }`}
                  >
                    <Card_Spot data={todo} parameter={todo.selected} />
                    <div
                      data-id={todo.id}
                      key={todo.id}
                      className={`todoDiv  mt-7 h-[18px] text-center text-[12px] w-full rounded-full flex justify-center items-center font-semibold border-2 border-[#909090] `}
                    >
                      Pilih
                    </div>
                  </div>
                  <div className=" mt-7 w-[270px] min-w-[270px] h-[40px] bg-[#f3f3f3] text-[#7E7E7E] font-bold flex justify-between rounded-full px-4 items-center">
                    <button onClick={() => handleDecrement("todos2", index)}>
                      - |
                    </button>

                    <div>{counts.todos2[index]}</div>

                    <button onClick={() => handleIncrement("todos2", index)}>
                      | +
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className=" w-full h-[50px] px-[8vw] justify-between mt-[7vh] md:mt-[2vh] flex">
            <Link
              to="sect1"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className=" bg-[#00829f] w-[120px] h-full rounded-full flex items-center justify-between px-4 py-2">
                <img src={ArrowBack} className=" h-full mt-1" alt="" />
                <p className="font-extrabold text-[20px] drop-shadow-xl text-white">
                  Back
                </p>
              </div>
            </Link>
            <Link
              to="sect3"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className=" bg-[#00829f] w-[120px] h-full rounded-full flex items-center justify-between px-4 py-2">
                <p className="font-extrabold text-[20px] drop-shadow-xl text-white">
                  Next
                </p>
                <img src={Arrow} className=" h-full mt-1" alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div id="sect3"></div>
        <div
          data-aos="fade-up"
          className=" w-screen h-fit min-h-fit  md:min-h-[800px] md:h-fit bg-bg_blur bg-cover mt-4 pb-[10vh] md:pb-4"
        >
          <div className=" w-screen h-[50px] md:h-[160px] bg-bg_listputih bg-cover px-[8vw] flex items-center">
            <div>
              <h2
                data-aos="fade-up"
                className=" text-2xl md:text-5xl font-extrabold text-[#4E4E4E] drop-shadow-title"
              >
                Spot Options
              </h2>
            </div>
          </div>
          <div className=" bg-white w-full h-[15px]"></div>
          <div className=" max-w-[88vw] 2xl:max-w-[84vw] 2xl:w-[84vw] md:px-[12vw] xl:px-[8vw]   max-h-fit md:max-h-[68vh] 2xl:max-h-[67vh] mt-[1vh] md:min-h-[550px]  flex gap-[20px] md:gap-[5vw]  items-center justify-center  mx-auto  overflow-x-auto overflow-y-hidden scrollgray py-2 pb-4 md:pb-0">
            {todos3.map((todo, index) => (
              <div className=" w-full">
                <div
                  onClick={todoClicked3}
                  data-id={todo.id}
                  key={todo.id}
                  className={`w-[280px] min-w-[270px] min-h-[410px] h-auto relative  bg-white rounded-3xl py-4 px-[20px] text-[#4C4C4C] transition-[min-height]  duration-500 ease-in  todoDiv ${
                    todo.selected ? " selected text-white" : " bg-white"
                  }`}
                >
                  <Card_StayOption data={todo} parameter={todo.selected} />
                  <div
                    className={` w-[100%] h-[25px] mt-6 flex  font-semibold text-[12px] mb-0`}
                  >
                    <div
                      onClick={todoClicked3}
                      data-id={todo.id}
                      key={todo.id}
                      className={`todoDiv  h-full text-center text-[12px] w-[45%]  rounded-full flex justify-center items-center font-semibold border-2 border-[#909090] `}
                    >
                      Pilih
                    </div>
                    <NavLink
                      to={`/review/${todo.id}`}
                      className="w-[50%]  ml-auto rounded-full bg-[#d9d9d9] text-[#989898] flex justify-center items-center"
                    >
                      <div>See the review</div>
                    </NavLink>
                  </div>
                </div>
                <div className=" mt-2 w-[280px] min-w-[270px] h-[40px] bg-[#f3f3f3] text-[#7E7E7E] font-bold flex justify-between rounded-full px-4 items-center">
                  <button onClick={() => handleDecrement("todos3", index)}>
                    - |
                  </button>

                  <div>{counts.todos3[index]}</div>

                  <button onClick={() => handleIncrement("todos3", index)}>
                    | +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="  w-full h-[45px] max-w-[88vw] 2xl:max-w-[86vw]  mx-auto block md:flex justify-between items-center p-0 mt-4 md:mt-4 mb-6 md:mb-0 ">
            <Link
              to="sect2"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hidden md:block"
            >
              <div className=" bg-[#00829f] md:ml-3 mt-[2vh] md:mt-0 w-[120px] h-full md:h-[50px] rounded-full flex items-center justify-between px-4 py-1">
                <img src={ArrowBack} className=" h-full mt-1 " alt="" />
                <p className="font-extrabold text-[20px] drop-shadow-xl text-white">
                  Back
                </p>
              </div>
            </Link>
            <form
              onSubmit={onSubmit}
              className=" w-full md:w-[40%] h-full flex gap-4 text-white text-[16px]  md:mt-0 2xl:mb-0"
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
            <Link
              to="sect2"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer md:hidden"
            >
              <div className=" bg-[#00829f] md:ml-3 mt-6  md:mt-0 w-[120px] h-[50px] md:h-[50px] rounded-full flex items-center justify-between px-4 py-1">
                <img src={ArrowBack} className=" h-full mt-1 " alt="" />
                <p className="font-extrabold text-[20px] drop-shadow-xl text-white">
                  Back
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Custom;
