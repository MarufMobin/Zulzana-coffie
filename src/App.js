import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import  NotFound  from './Pages/NotFound/NotFound';
import AllProducts from './Pages/AllProduct/AllProducts/AllProducts';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/allproduct">
              <AllProducts></AllProducts>
            </Route>
            
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
