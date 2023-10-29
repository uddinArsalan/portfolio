import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";
import { useState } from "react";

function App() {
  const [showNav,setShowNav] = useState<boolean>(false)
  return (
    <div className="grid md:grid-cols-4">
      <Navbar showNav={showNav} setShowNav={setShowNav}/>
      <Main />
    </div>
  );
}

export default App;
