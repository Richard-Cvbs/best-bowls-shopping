import React, {useState} from 'react'
import './App.css';
import { Navbar,Nav,Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import MyComponent from './components/MyComponent';
import PurchaseCart from './components/PurchaseCart';

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
];

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentCardItems, setCurrentCardItems] = useState([])

  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
      <Navbar.Brand href="#home">
        <span>
          <i className="bi bi-egg-fried me-1"></i>
            Best Bowls!
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse className='justify-content-end' id="main-navbar">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link onClick={handleShow} className='d-md-none' href="#link">
            <i className="bi bi-cart me-1"></i>
            Cart</Nav.Link>
          <Button onClick={handleShow} className='d-none d-md-inline' variant="success">
          <i className="bi bi-cart me-1"></i>
            Cart</Button>
        </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>

      <PurchaseCart currentCardItems={currentCardItems}  show={show} handleClose={handleClose}/>

      <Container fluid>
      <h2 className="bg-success p-1 text-warning text-center text-decoration-underline">Pick your preffered Bowls!!</h2>
        </Container>
      <Container>
      <MyComponent allItemsArray={allItemsArray}/>
      </Container>

    </div>
  );
}

export default App;
