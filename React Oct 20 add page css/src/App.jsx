import Header from "./pages/Header"
import Collage from "./pages/collage";
const App=()=>{
const name="vishal";
const age ='22';
const sub =(<ol>

<li>PHP</li>
<li>CSS</li>
<li>ASP</li>
<li>java</li>
<li>XML</li>

</ol>)


const student={
  name:"Vishal",
  class:"B-tech"
}
  return(
    <>
     <h1 id="home">Wellcome  to our react app</h1>
     <h2>My name is {name} kushwah i am {age} year old</h2>
     <Header/>
     <h1> Our computer are : {sub} </h1> 

     <h1>Application form</h1>
     Name : <input type="text" />
    <br />

     city : <input type="text" />
     <button>save</button>

     <Collage nm="vishal" age="21"/>

     <Collage nm="vishal" age="21">
        wardha
     </Collage>

     Name ={student.name}
     <br />
     Class ={student.class}

    </>
  )
}

export default App
