import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCardItem from "./MyCardItem";

function MyComponent(props){
  const allItemsArray = [
      {
      name: 'Bowl Fruit 1',
      url:'./images/np_Close up of bowl of fresh fruit with cherries, peaches, blueberry, square crop_43xoOb_free.jpg',
      price: 35.50,
      id: 1,
      },
      {
        name: 'Bowl Fruit 2',
        url:'/images/np_Healthy breakfast and thank you note_0P9x25_free.jpg',
        price: 39.99,
        id: 2,
      },
      {
        name: 'Bowl Fruit 3',
        url:'./images/np_Top view of pumpkin soup with flowers on the table_5QAlg5_free.jpg',
        price: 19.99,
        id: 3,
      },
      {
        name: 'Bowl Fruit 4',
        url:'./images/np_Flat-lay of yogurt bowl with fruit and spoon_4Aj3Eb_free.jpg',
        price: 30.99,
        id: 4,
      },
      {
        name: 'Bowl Fruit 5',
        url:'./images/np_Summer salad with tomatoes and mozzarella eaten_49VGnb_free.jpg',
        price: 19.99,
        id: 5,
      },
      {
        name: 'Bowl Fruit 6',
        url:'./images/np_Close up of quail eggs in bowl_0gggj0_free.jpg',
        price: 25.99,
        id: 6,
      },
      {
        name: 'Bowl Fruit 7',
        url:'./images/6CA14C98-F030-477F-A7C2-C940D029A06A.jpg',
        price: 81.25,
        id: 7,
      },
      {
        name: 'Bowl Fruit 8',
        url:'./images/1F711215-A14D-4EC9-86B6-FEBB191DCD96.jpg',
        price: 48.99,
        id: 8,
      },
      {
        name: 'Bowl Fruit 9',
        url:'./images/np_Female hands holding healthy lunch bowl_0KpKM5_free.jpg',
        price: 21.99,
        id: 9,
      },
      {
        name: 'Bowl Fruit 10',
        url:'./images/np_Man with vegetable bowl_5lXDY5_free.jpg',
        price: 15.99,
        id: 10,
      },
      {
        name: 'Bowl Fruit 11',
        url:'./images/np_Tomatoes, chilies and dill leaves on table_0JoGn5_free.jpg',
        price: 50.99,
        id: 11,
      },
      {
        name: 'Bowl Fruit 12',
        url:'./images/np_Blackberries in a bowl on purple background_0Jldw4_free.jpg',
        price: 28.99,
        id: 12,
      },
    ]
    
    return(
  <Container>
    <Row>
    {allItemsArray.slice(0,4).map(item =>  {
      return (
        <Col>
          <MyCardItem
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
                />
        </Col>)
    })
    }
    </Row>
    <Row>
    {allItemsArray.slice(4,8).map(item =>  {
      return (
        <Col>
          <MyCardItem
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
                />
        </Col>)
    })
    }
    </Row>
    <Row>
    {allItemsArray.slice(8,12).map(item =>  {
      return (
        <Col>
          <MyCardItem
          name={item.name}
          url={item.url}
          price={item.price}
          id={item.id}
                />
        </Col>)
    })
    }
    </Row>
  </Container>
    )
}

export default MyComponent