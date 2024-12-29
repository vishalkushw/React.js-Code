import { useState } from "react";
import Comp1 from "./Comp1";

import { createContext } from "react";
const myContext=createContext();

const App=()=>{
  const [name, setName]=useState("Vishal");
 
  return(
    <>
    <h1>wellcome :{name}</h1>
 
    <myContext.Provider value={{name}}>
      <Comp1/>
    </myContext.Provider>

    </>
  )
}
export default App;
export {myContext}