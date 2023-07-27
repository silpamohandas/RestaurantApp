import React, { useEffect, useState } from 'react'
import FoodLists from './FoodLists';

function Home() {

      //state to hold the datas
      const  [restaurants,setRestaurents]=useState([])

      //api to get all contacts from db.json
      const fetchData=async()=>{
          var result=await fetch('/restaurants.json')
        //   console.log(result.data);
          //convert json to js
          result.json().then(data=>setRestaurents(data.restaurants))
      }
      console.log(restaurants);

      useEffect(()=>{
          fetchData()
      },[])
  
  return (
    <div>
        <FoodLists data={restaurants}></FoodLists>
    </div>
  )
}

export default Home