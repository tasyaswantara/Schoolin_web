import { Link } from "react-router-dom";


const Hal2 = ({dataVillage}) => {
 
  return (
    <>
      <div className=" w-screen h-auto pb-[15vh]"  >
               
        <div className=" pl-[8vw] pr-[8vw] mt-10 md:mt-0">
          <h2 className=" text-5xl text-center md:text-left font-extrabold text-[#00829F] drop-shadow-title">
            Our Vilages
          </h2>
          <div className="  w-full h-auto md:h-[35vh] block md:flex gap-[5vw] mt-12  z-0 ">
            {dataVillage.map((data) => {
              return (
                <Link to={`/detail/${data.id}`}>
                  <div className=" w-auto h-[280px] p-0">
                    <img
                      src={data.gambar}
                      className=" h-[35vh] hover:-translate-y-5 hover:duration-1000"
                    />
                    <h3 className=" font-bold text-2xl mx-4 -mt-4">
                      {data.nama}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hal2;
