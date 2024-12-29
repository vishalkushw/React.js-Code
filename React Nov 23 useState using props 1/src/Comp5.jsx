import { useContext } from "react";
import {myContext} from "./App";
const Comp5=()=>{
  const {name}=useContext(myContext);
    return(
      <>
      <h1>component 5 name is : {name}</h1>

      </>
    )
  }
  export default Comp5;