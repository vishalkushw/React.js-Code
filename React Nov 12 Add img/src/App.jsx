// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // const App = () => {
 
// //   return (
// //     <>
// //       <Navbar bg="primary" data-bs-theme="dark">
// //         <Container>
// //           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
// //           <Nav className="me-auto">
// //             <Nav.Link href="#home">Home</Nav.Link>
// //             <Nav.Link href="#features">Features</Nav.Link>
// //             <Nav.Link href="#pricing">Pricing</Nav.Link>
// //           </Nav>
// //         </Container>
// //       </Navbar>
      
// //     </>
// //   );
// // };

// // export default App;

// // import myimg from "./img/pic.png";
// // import myimg1 from "./img/pic1.png";
// // const App = () => {
 
// //   return (
// //     <>
// //       <h1>well come to Bhopal</h1>
// //       <img src={myimg} width="300" height="200"/>
// //       <img src={myimg1} width="300" height="200"/>
// //       <img src={myimg} width="300" height="200"/>
// //       <img src={myimg1} width="300" height="200"/>



// //       <img src="public/img1/pic.png" width="300" height="200"/>
// //       <img src="public/img1/pic1" width="300" height="200"/>
      
      
// //     </>
// //   );
// // };

// // export default App;



// // const App = () => {
 
// //   return (
// //     <>
// //       <img src="public/img1/pic.png" width="400" height="400"/>
// //       <img src="public/img1/pic1.png" width="400" height="400"/>
// //       <img src="public/img1/pic.png" width="400" height="400"/>
// //     </>
// //   );
// // };

// // export default App;




// import Button from 'react-bootstrap/Button';

// const App = () => {
 
//   return (
//     <>
    
//     <Button variant="danger">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="danger">Danger</Button>
//       <Button variant="info">Info</Button>
//       <Button variant="light">Light</Button>
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
      

//     </>
//   );
// };

// export default App;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "./img/pic.png";
import ban2 from "./img/pic1.png";
import ban3 from "./img/pic.png";


const App=()=>{
  return(
    <>
    <Container>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Carousel>
      <Carousel.Item>
        <img src={ban1} width={330}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2}  width={430} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban3}  width={330}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </Container>

    </>
  )
}

export default App;