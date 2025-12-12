import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
