import { useState, useEffect } from 'react';
import AllProductsList from './pages/AllProductsList';

// eslint-disable-next-line react/prop-types
const HomepageMain = ({ endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/accessories`);
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [endpoint]);

  const formatThousand = (num) => {
    const n = String(num);
    const p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => (p < 0 || i < p ? `${m}.` : m));
  };

  const calculateDiscountedPrice = (initialPrice, discount) => {
    const discountedPrice = initialPrice * (1 - discount / 100);
    return Math.floor(discountedPrice); // Round down to the nearest integer
  };

  const renderStarIcons = (rating) => {
    const starCount = Math.floor(rating);
    return Array.from({ length: starCount }, (_, index) => (
      <span key={index} role="img" aria-label="Star Rating">
        ⭐
      </span>
    ));
  };


  return (
    <>
      <div className="py-10 px-5">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item) => (
              <AllProductsList
                key={item.id}
                discountPercent={item.discount}
                imgUrl={item.thumbnailPreview}
                title={item.detailName}
                rating={item.rating}
                discountPrice={item.initialPrice}
                price={formatThousand(calculateDiscountedPrice(item.initialPrice, item.discount))}
                link={`/products/${item.id}`} // Updated link value
              >
                {renderStarIcons(item.rating)}
              </AllProductsList>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageMain;
