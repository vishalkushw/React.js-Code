import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
  return (
    <>
      <Navbar id="nav">
        <Container>
          <Navbar.Brand href="#home">MyOnlineBooks</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid  >
        <Row > 
          <Col xs={2} id="sidebar-wrapper">
            <Nav className="flex-column" >
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="insert">Insert</Nav.Link>
              <Nav.Link as={Link} to="display">Display</Nav.Link>
              <Nav.Link as={Link} to="search">Search</Nav.Link>
              <Nav.Link as={Link} to="update">Update</Nav.Link>
            </Nav>
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
      {/* <hr size="4" color="black"/> */}
    
    </>
  );
};

export default Layout;