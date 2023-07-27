import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <Navbar className="bg-secondary">
   <Container>
     <Navbar.Brand href="#home">
       <Link style={{textDecoration:'none', color:'white'}} to={''}>
     {/* <i className="fa-solid fa-address-card"></i> */}
     <i className="fa-solid fa-utensils" style={{color: '#f5f7fa'}}></i> <span style={{fontFamily:'serif', fontSize:'30px' ,color:'#ffa500'}}> Foodtopia </span>
    </Link>
     </Navbar.Brand>
   </Container>
 </Navbar>

</div>
  )
}

export default Header