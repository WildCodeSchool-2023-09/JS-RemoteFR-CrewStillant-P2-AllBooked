import { Outlet } from "react-router-dom";

// import components

import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

// styles

import "./styles/App.css";
import { BooksProvider } from "./context/FavBooksContext";

function App() {
  return (
    <BooksProvider>
      <NavBar />
      <SearchBar />
      <Outlet />
      <Footer />
    </BooksProvider>
  );
}
export default App;
