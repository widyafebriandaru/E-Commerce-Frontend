// SearchResults.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Header';
import AllProductsList from '../AllProductsList';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products/allproducts');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = data.filter((product) =>
      product.detailName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredProducts);
  }, [data, searchQuery]);

  return (
    <>
      <div className="bg-slate-600 h-[57px]">
        <Header />
      </div>

      <div className="py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((item) => (
              <AllProductsList
                key={item.id}
                discountPercent={item.discount}
                imgUrl={item.thumbnailPreview}
                title={item.detailName}
                rating={item.rating}
                discountPrice={item.initialPrice}
                price={item.discountedPrice}
                link={`/products/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
