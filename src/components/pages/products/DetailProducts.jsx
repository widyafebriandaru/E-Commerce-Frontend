import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header';


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(''); // Added state for selected size
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/detailProducts/${id}`)
        const jsonData = await response.json();
        setProduct(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log('Product added to cart!');
  };

  const handleBuyNow = () => {
    // Logic to initiate the purchase
    console.log('Buy now clicked!');
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="bg-slate-400 h-[57px]">
      <Header />
    </div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        {/* Main Product Image */}
        <img src={product.thumbnailPreview} alt="Main Product" className="w-72 mx-auto" />

        {/* Sub Product Images */}
        <div className="flex mt-4 gap-3 justify-center">
          <img src={product.thumbnailUrl1} alt="Sub Product 1" className="w-1/5 h-1/5" />
          <img src={product.thumbnailUrl2} alt="Sub Product 2" className="w-1/5 h-1/5" />
          <img src={product.thumbnailUrl3} alt="Sub Product 3" className="w-1/5 h-1/5" />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 sm:mt-14">
        {/* Product Name */}
        <h2 className="text-3xl font-bold mb-2">{product.detailName}</h2>

        {/* Product Price */}
        <p className="text-lg font-bold mb-2">Price: ${product.initialPrice}</p>

        {/* Product Description */}
        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Counting Buttons */}
        <div className="flex items-center mb-4">
          <button
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
            onClick={handleDecreaseCount}
          >
            -
          </button>
          <span className="px-3 py-1">{count}</span>
          <button
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
            onClick={handleIncreaseCount}
          >
            +
          </button>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <p className="text-lg font-bold mb-2">Size:</p>
          <div className="flex items-center">
            <button
              className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-2 ${selectedSize === 'S' && 'bg-blue-500 text-white'}`}
              onClick={() => handleSizeSelection('S')}
            >
              S
            </button>
            <button
              className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-2 ${selectedSize === 'M' && 'bg-blue-500 text-white'}`}
              onClick={() => handleSizeSelection('M')}
            >
              M
            </button>
            <button
              className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-2 ${selectedSize === 'L' && 'bg-blue-500 text-white'}`}
              onClick={() => handleSizeSelection('L')}
            >
              L
            </button>
          </div>
        </div>

        {/* Buy Button */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full mr-2"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>

        {/* Add to Cart Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {/* Review Button */}
        <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded-full">
          Write a Review
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
