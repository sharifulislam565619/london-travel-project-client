
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import AddHotels from './components/Pages/AddHotels/AddHotels';
import Booking from './components/Pages/Booking/Booking';
import Home from './components/Pages/Home/Home';
import Hotels from './components/Pages/Hotels/Hotels';
import Login from './components/Pages/Login/Login';
import ManageOrders from './components/Pages/ManageOrders/ManageOrders';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import NotFound from './components/Pages/NotFound/NotFound';
import PrivateRoute from './components/Private/PrivateRoute';
import Footer from './components/Shared/Fooder/Footer';
import Header from './components/Shared/Header/Header';


function App() {
  return (
    <div className="App">

      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addHotel">
              <AddHotels></AddHotels>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
