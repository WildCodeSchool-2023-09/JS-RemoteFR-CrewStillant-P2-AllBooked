import { Outlet } from "react-router-dom";

// import components
import NavBar from "./components/Navbar";

// import page
import MyBooks from "./pages/MyBooks";

// styles
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <MyBooks />
      <Outlet />
    </>
  );
}
export default App;
