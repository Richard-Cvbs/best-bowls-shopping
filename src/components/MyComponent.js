import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCardItem from "./MyCardItem";

function MyComponent({allItemsArray, handleShopAdd}){
  
    
    return(
  <Container>
    <Row>
    {allItemsArray.slice(0,3).map(item =>  {
      return (
        <Col  key={item.key}>
          <MyCardItem
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
          handleShopAdd={handleShopAdd}
                />
        </Col>)
    })
    }
    </Row>
    <Row>
    {allItemsArray.slice(3,6).map(item =>  {
      return (
        <Col key={item.key}>
          <MyCardItem
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
          handleShopAdd={handleShopAdd}

                />
        </Col>)
    })
    }
    </Row>
    <Row>
    {allItemsArray.slice(6,9).map(item =>  {
      return (
        <Col key={item.key}>
          <MyCardItem
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
          handleShopAdd={handleShopAdd}

                />
        </Col>)
    })
    }
    </Row>
    <Row>
    {allItemsArray.slice(9,12).map(item =>  {
      return (
        <Col key={item.key}>
          <MyCardItem 
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
          handleShopAdd={handleShopAdd}
                />
        </Col>)
    })
    }
    </Row>
  </Container>
    )
}

export default MyComponent