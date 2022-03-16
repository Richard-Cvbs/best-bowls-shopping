import React, { useState } from "react";
import { Offcanvas, Card, Row, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCardItem from "./ShoppingCardItem";
import 'bootstrap-icons/font/bootstrap-icons.css'




function PurchaseCart({show, handleClose, currentCardItems ,handleShopRemove ,currentTotal}) {
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
                         <Row key={item.key}>
                             <ShoppingCardItem 
                             name = {item.name.toString()}
                             url = {item.url}
                             price = {item.price}
                             id = {item.id}
                             handleShopRemove = {handleShopRemove}
                             />
                         </Row>
                      )
                  })
              }
              <span className=''>
                  <span className='mt-3 d-flex justify-content-end me-3 align-items-center'>
                  <div className='lead me-3'>
                {`Total: $${currentTotal}`}
                </div>
                    <Button className='lead ' variant="warning">
                      Checkout
                    <i className="bi bi-cart ms-1"></i>
                    </Button>
                  </span>
              </span>
          </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default PurchaseCart