import React, { useState } from "react";
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

          function MyCardItem({name, url, price, id, handleShopAdd}){
    return(
  <Card key={id}  className="p-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url}/>
      <Card.Body>
      <Card.Title className='text-center'>
          {name}
          </Card.Title>
      <Card.Text className="lead text-center">
        {`$${price}`}
      </Card.Text>
      <div className="d-flex justify-content-center">
        <Button onClick={handleShopAdd} value={id} variant="primary">
            Add to cart
            </Button>
      </div>
    </Card.Body>
  </Card>
    )
}

export default MyCardItem