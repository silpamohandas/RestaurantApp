import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function FoodLists({data}) {
  return (
    <Container>
    <Row>{
        data.map(i=>(
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Link  to={`restaurentView/${i.id}`}  style={{textDecoration:'none'}}>
<Card className='ms-2 mt-4 ' style={{height:"400px"}}>
      <Card.Img className='p-1 border border' style={{height:"250px",width:'100%'}} variant="top" src={i.photograph} />
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        
        
        <ListGroup variant="flush">
        <ListGroup.Item>{i.address}</ListGroup.Item>
        
      </ListGroup>
      </Card.Body>
    </Card>
    </Link>
    </Col>
        ))
      }
      </Row>  
     </Container> 
   

  );
}

export default FoodLists