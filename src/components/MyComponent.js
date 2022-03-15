import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCardItem from "./MyCardItem";

function MyComponent(props){
  const allItemsArray = [
      {
      name: 'Bowl Fruit',
      url:'./images/np_Close up of bowl of fresh fruit with cherries, peaches, blueberry, square crop_43xoOb_free.jpg',
      price: 35.00
      },
      {
        name: 'Bowl Fruit',
        url:'/images/np_Close up of blue bowl of fresh fruit with cherries, peaches, blueberry, square crop_5qMja5_free.jpg',
        price: 39.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Top view of pumpkin soup with flowers on the table_5QAlg5_free.jpg',
        price: 19.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Flat-lay of yogurt bowl with fruit and spoon_4Aj3Eb_free.jpg',
        price: 30.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Summer salad with tomatoes and mozzarella eaten_49VGnb_free.jpg',
        price: 19.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Close up of quail eggs in bowl_0gggj0_free.jpg',
        price: 25.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/6CA14C98-F030-477F-A7C2-C940D029A06A.jpg',
        price: 81.25
      },
      {
        name: 'Bowl Fruit',
        url:'./images/1F711215-A14D-4EC9-86B6-FEBB191DCD96.jpg',
        price: 48.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Female hands holding healthy lunch bowl_0KpKM5_free.jpg',
        price: 21.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Man with vegetable bowl_5lXDY5_free.jpg',
        price: 15.00
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Tomatoes, chilies and dill leaves on table_0JoGn5_free.jpg',
        price: 50.99
      },
      {
        name: 'Bowl Fruit',
        url:'./images/np_Blackberries in a bowl on purple background_0Jldw4_free.jpg',
        price: 28.99
      },
    ];
    
    return(
  <Container>
    {allItemsArray.map(item =>  {
      return (
      <MyCardItem 
      name={item.name}
      url={item.url}
      price={item.price}
      />)
    }
    )
     }
  
  </Container>
    )
}

export default MyComponent