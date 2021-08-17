import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Products from "./components/Products";
import Product from "./components/Product";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ImageSlider />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:productname">
            <Product />
          </Route>
        </Switch>
        <div style={{ width: 100, height: 500 }}></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
