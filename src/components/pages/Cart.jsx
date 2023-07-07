import { useEffect, useState } from "react";
import AllProductsCart from "./AllProductsCart";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/orders/${user.id}`);
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  // const deleteProduct = async () => {
  //   try {
  //     await axios.delete(`http://localhost:3001/products/orders/${data.id}`);
  //     fetchData();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };

  return (
    <>
      <div className="bg-slate-600 h-[57px]">
        <Header />
      </div>

      <div className="py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data
              // .filter((order) => order.user_id === (user && user.id))
              .map((order) => (
                <AllProductsCart
                  key={order.id}
                  discountPercent={order.discount}
                  imgUrl={order.thumbnailPreview}
                  title={order.detailName}
                  rating={order.rating}
                  discountPrice={order.initialPrice}
                  price={order.discountedPrice}
                  link={`/products/${order.id}`}
                />
              ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
