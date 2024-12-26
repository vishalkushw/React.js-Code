import Container from 'react-bootstrap/Container';
import Topmenu from './component/Topmenu';
import Home from "./Pages/Home"
import Contact from './Pages/Contact';
const App=()=>{
  return(
    <>
   <Container>
   <Topmenu/>
   <Home/>
   <Contact/>
   </Container>
  
    </>
  )
}
export default App;