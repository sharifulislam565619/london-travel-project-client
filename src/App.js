
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Booking from './components/Pages/Booking/Booking';
import Home from './components/Pages/Home/Home';
import Hotels from './components/Pages/Hotels/Hotels';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Shared/Fooder/Footer';
import Header from './components/Shared/Header/Header';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/hotels">
            <Hotels></Hotels>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
