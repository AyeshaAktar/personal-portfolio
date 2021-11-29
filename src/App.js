import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header/Header";
import Banner from "./pages/Banner/Banner";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
