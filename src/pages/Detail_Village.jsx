import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataVillage } from "../components/utils/dataVillage";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IoMdArrowDropdown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Detail_Village = () => {
  const { id_village } = useParams();
  const [open, setopen] = useState(false);

  const selectedData = dataVillage.find(
    (item) => item.id === parseInt(id_village)
  );
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
      {selectedData ? (
        <>
          <div
            className=" w-screen h-screen  bg-cover fixed overflow-y-auto overflow-x-hidden "
            style={{ backgroundImage: `url(${selectedData.bg_detail})` }}
            data-aos="fade-up"
          >
            <div className=" w-full md:w-[95vw] h-auto   bg-gradient-to-r from-white from-45% pt-[20vh] py-[10vh] px-[10vw] md:px-[8vw] block md:flex">
              <div>
                <h2 className=" text-4xl md:text-5xl font-extrabold text-[#00829F] drop-shadow-title">
                  {selectedData.nama}
                </h2>
                <p className=" text-black text-[14px] md:text-[18px]  w-full md:w-[30vw] mt-12 font-medium">
                  {selectedData.desc}
                </p>
                <MapContainer
                  className=" rounded-3xl mt-16 md:mt-8 w-[90%] md:w-[30vw] h-[40vh] mx-auto md:mx-0"
                  center={[
                    selectedData.koordinat[0],
                    selectedData.koordinat[1],
                  ]}
                  zoom={13}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[
                      selectedData.koordinat[0],
                      selectedData.koordinat[1],
                    ]}
                  >
                    <Popup>{selectedData.nama}</Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className=" w-full md:w-[20vw] h-[10vh] mb-20 md:mb-0 md:h-[60vh] mx-auto md:mx-0 md:ml-auto mt-[10vh] md:mt-0  flex justify-center items-end md:bg-fixed">
                <div
                  className=" cursor-pointer group bg-[#00829F] text-xl font-extrabold text-white drop-shadow-nav w-full h-[50px] rounded-full flex justify-center items-center shadow-drop"
                  onClick={() => {
                    setopen(!open);
                  }}
                >
                  See the offer
                  <IoMdArrowDropdown />
                  <div
                    className={` mt-32 absolute text-black  rounded-2xl w-[50vw] md:w-[20vw] flex justify-end ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    <div className="mt-6 bg-[#D9D9D9] rounded-xl p-4 text-[#00829F] font-semibold w-full md:w-[40%]">
                      <ul>
                        <li className=" hover:-translate-y-1 hover:duration-1000 hover:font-extrabold text-center">
                          <a href={`/package/${selectedData.id}`}>Package</a>
                        </li>
                        <li className=" hover:-translate-y-1 hover:duration-1000 text-center hover:font-extrabold mt-2">
                          <a href={`/custom/${selectedData.id}`}>Custom</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Detail_Village;
