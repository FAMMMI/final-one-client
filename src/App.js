import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import NotFound from './pages/Shared/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Parts from './pages/Home/Parts';
import Products from './pages/Products/Products';
import RequireAuth from './pages/Login/RequireAuth';
import Purchase from './pages/Products/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyReviews from './pages/Dashboard/MyReviews';
import MyProfile from './pages/Dashboard/MyProfile';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<MyReviews></MyReviews>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allOrders' element={<MyProfile></MyProfile>}></Route>
          <Route path='addProduct' element={<MyProfile></MyProfile>}></Route>
          <Route path='manageProducts' element={<MyProfile></MyProfile>}></Route>

        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
