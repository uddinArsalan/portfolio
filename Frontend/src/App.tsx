import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-4">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Main />
    </div>
  );
}

export default App;
