import React from "react";
import { dataHome } from "../components/utils/dataHome";
import {dataVillage} from "../components/utils/dataVillage"

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Hal1 from "../components/Home/Hal1";
import Hal2 from "../components/Home/Hal2";

const Home = () => {

  return (
    < div className=" overflow-hidden">
      <Navbar />
      <Hal1 dataHome={dataHome} />
      <Hal2 dataHome={dataHome} dataVillage={dataVillage}/>
      <Footer/>
     
    </div>
  );
};

export default Home;
