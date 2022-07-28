import React,{useEffect, useState} from 'react'
import './css/houseproducts.css'
import HouseDelete from './HouseDelete';
import HouseStateUpdate from './HouseStateUpdate';
import HousePostDetails from './HousePostDetails';
import HseUpdate from './HseUpdate';
import {NavLink} from 'react-router-dom'

function HouseProducts() {
    const [houseProducts, setHouseProducts] = useState([]);
    useEffect(()=>{
        fetch('https://hms-server1235.herokuapp.com/houses')
        .then((res)=>res.json())
        .then((data)=>setHouseProducts(data))
    })

    function handleDeleteClick(id) {
        fetch(`https://hms-server1235.herokuapp.com/houses/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            const updatedQuestions = houseProducts.filter((q) => q.id !== id);
            setHouseProducts(updatedQuestions);
          });
      }
      function handlePostClick(id){
        fetch(`https://hms-server1235.herokuapp.com/houses/${id}`)
        .then ((r)=>r.json())
        .then ((data)=>console.log(data))
        // alert('now')
         

      }
      function handleAnswers(id, name) {
        fetch(`https://hms-server1235.herokuapp.com/houses/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        })
          .then((r) => r.json())
          .then((updatedQuiz) => {
            const updatedQuestions = houseProducts.map((quiz) => {
              if (quiz.id === updatedQuiz.id) return updatedQuiz;
              return quiz;
            });
            setHouseProducts(updatedQuestions);
          });
      }
  

    const houseProductsList = houseProducts.map((house,index)=>(
        <>
        <div className='mainhouseProducts'>
            <div className='mainProducts'>
                <div className='row'>
                    <div key={house.id} className='column'>
                        <div className='column2' >
                        <img src= {house.image2} alt="Image house" className='imageProducts'></img>
                            <p className='imagehouse'> {house.name}</p>
                            {/* <button className='imageButton imageButton3'>Explore</button> */}
                            {/* <HousePostDetails 
                            index={house.id}
                            houseName={house.name}
                            onPostClick={handlePostClick}
                             /> */}
                             <NavLink to="/updatehousename">

                                 <button className='imageButton imageButton3' onClick={handleAnswers}>Explore </button>
                             </NavLink>
                            <div className='space'> </div>
                            <HouseDelete 
                                 key={house.id}
                                 house={house}
                                onDeleteClick={handleDeleteClick}
         
                              />
                           <HouseStateUpdate
                        //    key={house.id}
                           house={house}
                

                           />

                        </div>


                    </div>
                    
                </div>


            </div>
           
        </div> 
     


        </>
      


      
        

    ));
    

  return (
    <div>
        {houseProductsList}
       
    

    </div>
  )
}

export default HouseProducts