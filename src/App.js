import { useState } from "react";
import Selection from './Components/Selection'

function App() {
  const [clicked,setClicked] = useState(false)

  function gotoSelection() {
    setClicked(true)
  }

  if (clicked===true){
  return <Selection/>
  }
  return(
    <>
    <h1>Welcome to amazon!</h1>
    <button onClick={gotoSelection}>Select product</button>
    </>
  );
  }


export default App;
