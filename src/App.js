import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Products Page</Link>
        <Link to="/cart">cart Page</Link>
        <Link to="/order">Orders</Link>
      </nav>
      <AllRoutes />
    </div>
  );
}

export default App;
