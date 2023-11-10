import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* <SearchBar /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
