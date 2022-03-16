import React, { useState } from "react";
import { Offcanvas, Card, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCardItem from "./ShoppingCardItem";



function PurchaseCart({show, handleClose, currentCardItems}) {
    return (
      <>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Container>
              {
                  currentCardItems.map( item =>{
                      return (
                         <Row>
                             <ShoppingCardItem 
                             name = {item.name}
                             url = {item.url}
                             price = {item.price}
                             id = {item.id}
                             />
                         </Row>
                      )
                  })
              }
          </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default PurchaseCart