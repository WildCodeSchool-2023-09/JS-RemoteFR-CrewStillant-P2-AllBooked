import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div>
      <NavBar />

      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
