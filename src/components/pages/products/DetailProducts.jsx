import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/products/detailProducts/${id}`
        );
        const jsonData = await response.json();
        setProduct(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const formatThousand = (num) => {
    const n = String(num);
    const p = n.indexOf(".");
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
      p < 0 || i < p ? `${m}.` : m
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/orders", {
        user_id: user.id,
        detail_id: id,
      });
      alert("Success add to your cart");

      // Update the cart number in the header
      const response = await fetch(`http://localhost:3001/orders/${user.id}`);
      const jsonData = await response.json();
      const matchingData = jsonData.data.filter(
        (order) => order.user_id === user.id
      );
      const updatedCartNumber = matchingData.length;
      document.getElementById("cart-number").innerText = updatedCartNumber;
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    window.location.reload();
  };

  return (
    <>
      <div className="bg-slate-600 h-[57px]">
        <Header />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          {/* Main Product Image */}
          <img
            src={product.thumbnailPreview}
            alt="Main Product"
            className="w-72 mx-auto"
          />

          {/* Sub Product Images */}
          <div className="flex mt-4 gap-3 justify-center">
            <img
              src={product.thumbnailUrl1}
              alt="Sub Product 1"
              className="w-1/5 h-1/5"
            />
            <img
              src={product.thumbnailUrl2}
              alt="Sub Product 2"
              className="w-1/5 h-1/5"
            />
            <img
              src={product.thumbnailUrl3}
              alt="Sub Product 3"
              className="w-1/5 h-1/5"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 sm:mt-14">
          {/* Product Name */}
          <h2 className="text-3xl font-bold mb-2">{product.detailName}</h2>

          {/* Product Price */}
          <p className="text-lg font-bold mb-2">
            Price: Rp {formatThousand(product.initialPrice)}
          </p>

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
                className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-2 ${
                  selectedSize === "S" && "bg-slate-800 text-white"
                }`}
                onClick={() => handleSizeSelection("S")}
              >
                S
              </button>
              <button
                className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-2 ${
                  selectedSize === "M" && "bg-slate-800 text-white"
                }`}
                onClick={() => handleSizeSelection("M")}
              >
                M
              </button>
              <button
                className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-full mr-2 ${
                  selectedSize === "L" && "bg-slate-800 text-white"
                }`}
                onClick={() => handleSizeSelection("L")}
              >
                L
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-slate-800 hover:bg-slate-200 text-white hover:text-black font-semibold px-4 py-2 rounded-full mr-2 hover:scale-110 transition ease-in-out duration-[350ms]"
            onClick={addToCart}
          >
            Add to Cart
          </button>

          {/* Review Button */}
          <button className="border border-gray-500 text-gray-700 hover:bg-slate-200 px-4 py-2 rounded-full hover:scale-110 transition ease-in-out duration-[350ms]">
            Write a Review
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
