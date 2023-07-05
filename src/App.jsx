import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getMe } from "./features/authSlice";
import Homepage from "./components/pages/Homepage";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import AllProducts from "./components/pages/products/AllProducts";
import Sweater from "./components/pages/products/Sweater";
import TShirt from "./components/pages/products/TShirt";
import Shirt from "./components/pages/products/Shirt";
import NewArrivals from "./components/pages/products/NewArrivals";
import Accessories from "./components/pages/products/Accessories";
import WrongPage from "./components/pages/WrongPage";
import Contact from "./components/pages/Contact";
import Magazine from "./components/pages/Magazine";
import BackToTopButton from "./components/BackToTopButton";
import ProductDetail from "./components/pages/products/DetailProducts";
import Pants from "./components/pages/products/Pants";
import Search from "./components/Search";
import Dashboard from "./components/pages/Dashboard";
import UserProfile from "./components/pages/UserProfile";
import AdminProducts from "./components/AdminProducts";
import FormAddProduct from "./components/FormAddProduct";



function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
          <Route path="/sweater" element={<Sweater />}></Route>
          <Route path="/t-shirt" element={<TShirt />}></Route>
          <Route path="/shirt" element={<Shirt />}></Route>
          <Route path="/new-arrivals" element={<NewArrivals />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<WrongPage />}></Route>
          <Route path="/Magazine" element={<Magazine />}></Route>
          <Route path="/pants" element={<Pants />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/admin/products" element={<AdminProducts />}></Route>
          <Route path="/products/add" element={<FormAddProduct />}></Route>
        </Routes>
      </Router>
      <BackToTopButton />
    <Footer/>
    </>
  );
}

export default App;
