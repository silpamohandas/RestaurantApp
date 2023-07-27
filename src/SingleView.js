import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function SingleView() {

    const [allRestaurants,setRestaurant]=useState([])
    const params=useParams()
    const getRestaurent=async()=>{
      const result=await fetch('/restaurants.json')
      result.json().then(data=>{
        console.log(data);
        setRestaurant(data.restaurants);
      })
    }
    // console.log(allRestaurants);
  
  useEffect(()=>{
    getRestaurent()
    // console.log(params.id);
  },[])
  
  const singleRestaurent=allRestaurants.find(i=>i.id==params.id)
  console.log(singleRestaurent);
  return (
    <div className='text-center'>
      {
       singleRestaurent ?
        <div>
        <h3 style={{fontFamily:'serif', fontSize:'35px' ,color:'#ffa500'}}>{singleRestaurent.name}</h3>
        <img src={singleRestaurent.photograph} className='mt-2 w-25 ' style={{height:300}} alt="" />
        <ListGroup variant="flush" className='w-25 container mt-2 mb-5 p-3'>
        <ListGroup.Item >Neighborhood:{singleRestaurent.neighborhood}</ListGroup.Item>
        <ListGroup.Item>Reviews:{singleRestaurent.reviews.length}</ListGroup.Item>
        <ListGroup.Item>Cusine type:{singleRestaurent.cuisine_type}</ListGroup.Item>
        <ListGroup.Item>Address:{singleRestaurent.address}</ListGroup.Item>

      </ListGroup>
    </div>
    : <h1>No details present</h1>
}
</div>
  )
}

export default SingleView