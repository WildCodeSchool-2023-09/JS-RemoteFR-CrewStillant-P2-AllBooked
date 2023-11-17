import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import CurrentRead from "./components/CurrentRead";
import "./styles/App.css";

function App() {
  return (
    <div>
      <NavBar />
      <CurrentRead />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
