import React, { useState } from "react";
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingCardItem({name, url, price, id, handleShopRemove}){
    return(
  <Card key={id} className="p-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url}/>
      <Card.Body>
      <Card.Title className='text-center'>
          {name}
          </Card.Title>
      <Card.Text className="lead text-center">
        {`$${price}`}
      </Card.Text>
      <div className="d-flex justify-content-center">
        <Button value={id} onClick={handleShopRemove} variant="primary">
            Remove item from Cart
            </Button>
      </div>
    </Card.Body>
  </Card>
    )
}

export default ShoppingCardItem