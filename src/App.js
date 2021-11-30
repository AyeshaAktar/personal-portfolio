import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Detail1 from "./pages/Details/Detail1";
import Detail2 from "./pages/Details/Detail2";
import Detail3 from "./pages/Details/Detail3";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/detail1">
            <Detail1></Detail1>
          </Route>
          <Route path="/detail2">
            <Detail2></Detail2>
          </Route>
          <Route path="/detail3">
            <Detail3></Detail3>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
