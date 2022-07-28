import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register"
import SideNavBar from "./components/SideNavBar";
import House from "./components/House";
import '../src/components/css/house.css'
import HouseItems from "./components/HouseItems";

import { Route, Routes } from "react-router-dom";
import HouseProducts from "./components/HouseProducts";
import HouseForm from "./components/HouseForm";
import HousePostDetails from "./components/HousePostDetails";
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
         {/* <Register /> */}
          {/* <Login /> */}
          {/* <HouseItems /> */}
          {/* <HouseProducts /> */}
          <Routes>
       <Route exact path="/houses" element={<HouseProducts />}/>
       <Route exact path="/houseform" element ={<HouseForm />} />
       <Route exact path="/updatehousename" element ={<HseUpdate />} />
       <Route exact path="/register" element ={<Register />} />
       <Route exact path="/login" element ={<Login />} />
       </Routes>

        </div>

      </div>
      </div>


    // <div className="App">
    //   <NavBar />
     
    //   <Routes>
    //     <Route path="/houses" element={<House/>}/>
            

       
    //     </Routes>
      
    
     
     
    // </div>
  );
}

export default App;
