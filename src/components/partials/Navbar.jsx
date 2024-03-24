import { Link, animateScroll as scroll } from "react-scroll";
import { IoMdArrowDropdown } from "react-icons/io";
const NavList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Village",
    path: "/ourvillage",
  },
  {
    name: "Offers",
    path: "/offers",
  },
  {
    name: "About Us",
    path: "/about ",
  },
];

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-screen block h-16 px-0 md:px-16 bg-[#00829F] py-2 ">
      <div className="flex justify-center md:justify-between lg:px-20 xl:px-[4vw] md:px-14 px-0 h-[50px] md:h-[50px] xl:min-h-[50px] items-center xl:gap-7 gap-0  ">
        <div>
          <div className="flex">
            <ul className="flex justify-center text-white xl:gap-12 gap-4 items-center">
              {window.location.pathname === NavList[0].path && (
                <>
                  <li>
                    <a
                      href={NavList[0].path}
                      className={
                        window.location.pathname === NavList[0].path
                          ? "text-color-2 xl:text-[16px] font-bold drop-shadow-lg md:text-[18px]"
                          : "text-neutral-20 font-normal text-[22px] hover:text-color-2 md:text-[18px] xl:text-[16px] lg:text-md"
                      }
                      style={{
                        textShadow:
                          window.location.pathname === NavList[0].path
                            ? "0px 4px 10px rgba(124, 252, 246, 0.6), 0px 0px 15px "
                            : "none",
                      }}
                    >
                      <p className="nav-hover flex items-center h-full">
                        {NavList[0].name}
                      </p>
                    </a>
                  </li>
                  <Link
                    to="our"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <li>
                      <div className="text-neutral-20 font-normal text-[22px] hover:text-color-2 md:text-[18px] xl:text-[16px] lg:text-md">
                        <p className="nav-hover flex items-center h-full text-[16px]">
                          Our Village
                        </p>
                      </div>
                    </li>
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <li>
                      <div>
                        <p className="nav-hover flex items-center h-full">
                          About Us
                        </p>
                      </div>
                    </li>
                  </Link>
                </>
              )}
              {(window.location.pathname === "/detail/1" ||
                window.location.pathname === "/detail/2" ||
                window.location.pathname === "/detail/3") && (
                <>
                  <li>
                    <a
                      href={NavList[0].path}
                      className={
                        window.location.pathname === "/"
                          ? "text-color-2 xl:text-[16px] font-bold drop-shadow-lg md:text-[18px]"
                          : "text-neutral-20 font-normal text-[22px] hover:text-color-2 md:text-[18px] xl:text-[16px] lg:text-md"
                      }
                      style={{
                        textShadow:
                          window.location.pathname === "/"
                            ? "0px 4px 10px rgba(124, 252, 246, 0.6), 0px 0px 15px "
                            : "none",
                      }}
                    >
                      <p className="nav-hover flex items-center h-full">Home</p>
                    </a>
                  </li>
                  <li className=" group">
                    <a
                      className={
                        window.location.pathname === NavList[2].path
                          ? "text-color-2 xl:text-[16px] font-bold drop-shadow-lg md:text-[18px]"
                          : "text-neutral-20 font-normal text-[22px] hover:text-color-2 md:text-[18px] xl:text-[16px] lg:text-md"
                      }
                      style={{
                        textShadow:
                          window.location.pathname === NavList[2].path
                            ? "0px 4px 10px rgba(124, 252, 246, 0.6), 0px 0px 15px "
                            : "none",
                      }}
                    >
                      <p className="nav-hover flex items-center h-full">
                        {NavList[2].name}
                        <IoMdArrowDropdown />
                      </p>
                    </a>
                    <div className="hidden group-hover:block -mt-4 absolute text-black  rounded-2xl w-[80pxpx]">
                      <div className="mt-6 bg-[#D9D9D9] rounded-xl p-4 text-[#00829F] font-semibold">
                        <ul>
                          <li className=" hover:-translate-y-1 hover:duration-1000">
                            <a
                              href={`${
                                window.location.pathname === "/detail/1"
                                  ? "/package/1"
                                  : window.location.pathname === "/detail/2"
                                  ? "/package/2"
                                  : window.location.pathname === "/detail/3"
                                  ? "/package/3"
                                  : ""
                              }`}
                            >
                              Package
                            </a>
                          </li>
                          <li className=" hover:-translate-y-1 hover:duration-1000">
                            <a
                              href={`${
                                window.location.pathname === "/detail/1"
                                  ? "/custom/1"
                                  : window.location.pathname === "/detail/2"
                                  ? "/custom/2"
                                  : window.location.pathname === "/detail/3"
                                  ? "/custom/3"
                                  : ""
                              }`}
                            >
                              Custom
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </>
              )}
              {(window.location.pathname === "/package/1" ||
                window.location.pathname === "/package/2" ||
                window.location.pathname === "/package/3" ||
                window.location.pathname === "/custom/1" ||
                window.location.pathname === "/custom/2" ||
                window.location.pathname === "/custom/3" ||
                window.location.pathname === "/review" ||
                window.location.pathname === "/review/1" ||
                window.location.pathname === "/review/2" ||
                window.location.pathname === "/review/3") && (
                <>
                  <li>
                    <a
                      href={NavList[0].path}
                      className={
                        window.location.pathname === "/"
                          ? "text-color-2 xl:text-[16px] font-bold drop-shadow-lg md:text-[18px]"
                          : "text-neutral-20 font-normal text-[22px] hover:text-color-2 md:text-[18px] xl:text-[16px] lg:text-md"
                      }
                      style={{
                        textShadow:
                          window.location.pathname === "/"
                            ? "0px 4px 10px rgba(124, 252, 246, 0.6), 0px 0px 15px "
                            : "none",
                      }}
                    >
                      <p className="nav-hover flex items-center h-full">Home</p>
                    </a>
                  </li>
                  <li className=" group">
                    <a
                      className={
                        window.location.pathname === NavList[2].path
                          ? "text-color-2 xl:text-[16px] font-bold drop-shadow-lg md:text-[18px]"
                          : "text-neutral-20 font-normal text-[22px] hover:text-color-2 md:text-[18px] xl:text-[16px] lg:text-md"
                      }
                      style={{
                        textShadow:
                          window.location.pathname === NavList[2].path
                            ? "0px 4px 10px rgba(124, 252, 246, 0.6), 0px 0px 15px "
                            : "none",
                      }}
                    >
                      <p className="nav-hover flex items-center h-full">
                        {NavList[2].name}
                        <IoMdArrowDropdown />
                      </p>
                    </a>
                    <div className="hidden group-hover:block -mt-4 absolute text-black  rounded-2xl w-[80pxpx]">
                      <div className="mt-6 bg-[#D9D9D9] rounded-xl p-4 text-[#00829F] font-semibold">
                        <ul>
                          <li className=" hover:-translate-y-1 hover:duration-1000 hover:font-extrabold">
                            <a
                              href={`${
                                window.location.pathname === "/package/1" ||
                                window.location.pathname === "/custom/1" ||
                                window.location.pathname === "/review/1"
                                  ? "/package/1"
                                  : window.location.pathname === "/package/2" ||
                                    window.location.pathname === "/custom/2" ||
                                    window.location.pathname === "/review/2"
                                  ? "/package/2"
                                  : window.location.pathname === "/package/3" ||
                                    window.location.pathname === "/custom/3" ||
                                    window.location.pathname === "/review/3"
                                  ? "/package/3"
                                  : ""
                              }`}
                            >
                              Package
                            </a>
                          </li>
                          <li className=" hover:-translate-y-1 hover:duration-1000 hover:font-extrabold">
                            <a
                              href={`${
                                window.location.pathname === "/package/1" ||
                                window.location.pathname === "/custom/1" ||
                                window.location.pathname === "/review/1"
                                  ? "/custom/1"
                                  : window.location.pathname === "/package/2" ||
                                    window.location.pathname === "/custom/2" ||
                                    window.location.pathname === "/review/2"
                                  ? "/custom/2"
                                  : window.location.pathname === "/package/3" ||
                                    window.location.pathname === "/custom/3" ||
                                    window.location.pathname === "/review/3"
                                  ? "/custom/3"
                                  : ""
                              }`}
                            >
                              Custom
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {window.location.pathname === "/detail/1" ||
        window.location.pathname === "/package/1" ||
        window.location.pathname === "/custom/1" ||
        window.location.pathname === "/review/1" ||
        window.location.pathname === "/review/2" ||
        window.location.pathname === "/review/3" ? (
          <div className=" w-[67%] hidden md:block  drop-shadow-nav text-3xl font-bold text-white text-left">
            Schoolin | Desa Kembang Arum{" "}
          </div>
        ) : window.location.pathname === "/detail/2" ||
          window.location.pathname === "/package/2" ||
          window.location.pathname === "/custom/2" ? (
          <div className=" w-[67%] hidden md:block   drop-shadow-nav text-3xl font-bold text-white text-left">
            Schoolin | Desa Rumah Domes{" "}
          </div>
        ) : window.location.pathname === "/detail/3" ||
          window.location.pathname === "/package/3" ||
          window.location.pathname === "/custom/3" ? (
          <div className=" w-[65%] hidden md:block   drop-shadow-nav text-3xl font-bold text-white text-left">
            Schoolin | Desa Pentingsari{" "}
          </div>
        ) : (
          <div className=" w-[55%] hidden md:block   drop-shadow-nav text-3xl font-bold text-white text-left">
            Schoolin
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
