import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardContent(props){
  const [allImagesArray, setallImagesArray] = useState([
    {name: 'bowl1', url:'./images/np_Close up of bowl of fresh fruit with cherries, peaches, blueberry, square crop_43xoOb_free.jpg'}
  ])
    return(
<Container>
  <Card className="p-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={allImagesArray[0].url} alt={}/>
      <Card.Body>
      <Card.Title className='text-center'>Bowl of fresh fruit with cherries</Card.Title>
      <Card.Text className="lead text-center">
        $18.99
      </Card.Text>
      <div className="d-flex justify-content-center">
        <Button variant="primary">Add to cart</Button>
      </div>
    </Card.Body>
  </Card>
</Container>
    )
}

export default CardContent