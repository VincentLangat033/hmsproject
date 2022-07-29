import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register"
import SideNavBar from "./components/SideNavBar";
import '../src/components/css/house.css'
import { Route, Routes } from "react-router-dom";
import HouseProducts from "./components/HouseProducts";
import HouseForm from "./components/HouseForm";
import HseUpdate from "./components/HseUpdate";

function App() {
  return (
    <div>
      <NavBar />
      <div className='mainContent'>

       <div className='sideNavBar'>
       <SideNavBar />
       
          
        </div>
        <div className='midContentBody'>
        
          <Routes>
       <Route exact path="/" element={<HouseProducts />}/>
       <Route exact path="/houseform" element ={<HouseForm />} />
       <Route exact path="/updatehousename" element ={<HseUpdate />} />
       <Route exact path="/register" element ={<Register />} />
       <Route exact path="/login" element ={<Login />} />
       </Routes>

        </div>

      </div>
      </div>


  );
}

export default App;
