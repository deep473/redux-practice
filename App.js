import { useState } from "react";
import Login from "./Components/Login";

function App() {
  const user = {
      username : 'Deep',
      wallet : 25000
  }
  const [clicked, setClicked] = useState(false);
  function gotoLogin(){
      setClicked(true);
  }
  if(clicked){
    return (
      <Login user = {user}/>
    )
  }
  return (
    <>
      <h2>Welcome to Shopping app!</h2>
      <button onClick={gotoLogin}>
          Login to continue
      </button>
    </>
  );
}

export default App;
