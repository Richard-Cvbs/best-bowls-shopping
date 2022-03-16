import React, {useState} from 'react'
import './App.css';
import { Navbar,Nav,Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import MyComponent from './components/MyComponent';
import PurchaseCart from './components/PurchaseCart';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Nav.Link className='d-md-none' href="#link">
            <i className="bi bi-cart me-1"></i>
            Cart</Nav.Link>
          <Button onClick={handleShow} className='d-none d-md-inline' variant="success">
          <i className="bi bi-cart me-1"></i>
            Cart</Button>
        </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>

      <PurchaseCart  show={show} handleClose={handleClose}/>

      <Container fluid>
      <h2 className="bg-success p-1 text-warning text-center text-decoration-underline">Pick your preffered Bowls!!</h2>
        </Container>
      <Container>
      <MyComponent/>
      </Container>

    </div>
  );
}

export default App;
