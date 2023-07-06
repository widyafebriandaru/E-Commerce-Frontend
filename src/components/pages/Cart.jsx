import { useEffect, useState } from 'react';
import AllProductsList from './AllProductsList';
import Header from '../Header';
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const {user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/orders');
            const jsonData = await response.json();
            setData(jsonData.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const countMatchingData = () => {
        const matchingData = data.filter((order) => order.user_id === user.id);
        return matchingData.length;
      };
  return (
    <>
    <div className="bg-slate-400 h-[57px]">
        <Header />
      </div>

      <div className="py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data
            .filter((order) => order.user_id === (user && user.id))
            .map((order) => (
              <AllProductsList
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
          <div>
  Total matching data: {countMatchingData()}
</div>

        </div>
      </div>
    </>
  )
}

export default Cart