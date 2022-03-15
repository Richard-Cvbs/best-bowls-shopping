import './App.css';
import { Navbar,Nav,Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import CardContent from './components/CardContent';

function App() {
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
          <Button className='d-none d-md-inline' variant="success">
          <i className="bi bi-cart me-1"></i>
            Cart</Button>
        </Nav>
      </Navbar.Collapse>
        </Container>
        
      </Navbar>
      <Container fluid>
      <h2 className="bg-success p-1 text-warning text-center text-decoration-underline">Pick your preffered Bowls!!</h2>
        </Container>
      <Container>
      <CardContent/>
      </Container>
    </div>
  );
}

export default App;
