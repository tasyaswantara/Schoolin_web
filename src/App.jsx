
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css'



// pages

import Home from './pages/Home';
import Detail_Village from './pages/Detail_Village';
import Paket from "./pages/Paket";
import Custom from "./pages/Custom";
import Review from "./pages/Review";
function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_village" element={<Detail_Village />} />
          <Route path="/offers" element={<Paket />} />
          <Route path="/package/:id_village" element={<Paket />} />
          <Route path="/custom/:id_village" element={<Custom />} />
          <Route path="/review/:id_review" element={<Review />} />
          <Route path="/review" element={<Review />} />

       
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
