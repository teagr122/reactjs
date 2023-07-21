import './App.css';
import { Navbar, Container,Nav, NavDropdown, Card, Row, Col,Image,Button,ListGroup  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  <main>
    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
        <Image 
        src="https://picsum.photos/id/340/450/650.jpg"
        fluid
        rounded
        className="" 
         />
        </Col>
        <Col sm={5}>
          <h1 class="font-wigh-light">Tagline</h1>
          <p class="mt-4">
            ini adalah hasil foto terbaik dan terindah yang saya pernha lihat
          </p>
          <Button variant="outline-primary"> call to action</Button>
        </Col>
      </Row>
      <Row>
      <Card className="text-center bg-secondary text-white my-5 py-4">
      <Card.Body>This is some text within a card body.</Card.Body>
     </Card>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://picsum.photos/id/220/520/200"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://picsum.photos/id/220/520/200">klik untuk melihat</Card.Link>
        <Card.Link href="https://google.com/">Shearch</Card.Link>
      </Card.Body>
    </Card>
        </Col>
     <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/260/560/250" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://picsum.photos/id/260/560/250">klik untuk melihat</Card.Link>
        <Card.Link href="https://google.com">Shearch</Card.Link>
      </Card.Body>
    </Card>
     </Col>
     <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/250/550/220" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://picsum.photos/id/250/550/220">klik untuk melihat</Card.Link>
        <Card.Link href="https://google.com">Shearch</Card.Link>
      </Card.Body>
    </Card>
     </Col>
      </Row>
    </Container>
  </main>
  <footer class="py-5 my-5 bg-dark">
    <Container className="px-5">
      <p className="text-center text-white">Copyright &copy; tegar website 2023 </p> 
    </Container>
  </footer>
  </div>
  )
}

export default App;
