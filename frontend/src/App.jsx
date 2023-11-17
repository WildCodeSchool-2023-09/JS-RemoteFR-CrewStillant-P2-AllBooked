import { Outlet } from "react-router-dom";

// import components

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// styles

import "./styles/App.css";
import { BooksProvider } from "./context/FavBooksContext";

function App() {
  return (
    <BooksProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </BooksProvider>
  );
}
export default App;
