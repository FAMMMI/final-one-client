import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import NotFound from './pages/Shared/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Products from './pages/Products/Products';
import RequireAuth from './pages/Login/RequireAuth';
import Purchase from './pages/Products/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyReviews from './pages/Dashboard/MyReviews';
import MyProfile from './pages/Dashboard/MyProfile';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import AddProducts from './pages/Dashboard/AddProduct';
import AllOrders from './pages/Dashboard/AllOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import UpdateProduct from './pages/Dashboard/UpdateProduct';
import Users from './pages/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './pages/Dashboard/Payment';
import RequireAdmin from './pages/Login/RequireAdmin';
import Blogs from './pages/Blogs/Blogs'
import ReviewsNav from './pages/Reviews/ReviewsNav';
import WelcomeDashboard from './pages/Dashboard/WelcomeDashboard';


function App() {
  return (
    <div className="App  bg-yellow-50	">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reviews' element={<ReviewsNav></ReviewsNav>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/updateProduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<MyReviews></MyReviews>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='allOrders' element={<RequireAdmin>
            <AllOrders></AllOrders>
          </RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addProduct' element={<AddProducts></AddProducts>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='users' element={<Users></Users>}></Route>

        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
