import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [product_quote_S, setProduct_quote_S] = useState("");
  const [product_quote_L, setProduct_quote_L] = useState("");
  const [product_quote_XL, setProduct_quote_XL] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [thumbnailUrl1, setThumbnailUrl1] = useState("");
  const [thumbnailUrl2, setThumbnailUrl2] = useState("");
  const [thumbnailUrl3, setThumbnailUrl3] = useState("");

  const { id } = useParams();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/allProducts/${id}`);
        setName(response.data.detailName);
        setPrice(response.data.initialPrice);
        setDiscount(response.data.discount);
        setCategory(response.data.category);
        setReview(response.data.review);
        setRating(response.data.rating);
        setDescription(response.data.description);
        setProduct_quote_S(response.data.product_quote_S);
        setProduct_quote_L(response.data.product_quote_L);
        setProduct_quote_XL(response.data.product_quote_XL);
        setThumbnailPreview(response.data.thumbnailPreview);
        setThumbnailUrl1(response.data.thumbnailUrl1);
        setThumbnailUrl2(response.data.thumbnailUrl2);
        setThumbnailUrl3(response.data.thumbnailUrl3);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/products/allProducts/${id}`, {
        detailName: name,
        initialPrice: price,
        discount: discount,
        category: category,
        description: description,
        review: review,
        rating: rating,
        product_quote_S: product_quote_S,
        product_quote_L: product_quote_L,
        product_quote_XL: product_quote_XL,
        thumbnailPreview: thumbnailPreview,
        thumbnailUrl1: thumbnailUrl1,
        thumbnailUrl2: thumbnailUrl2,
        thumbnailUrl3: thumbnailUrl3,
      });
      navigate("/admin/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <h2 className="text-xl font-bold">Edit Products</h2>
      <div className="shadow-md p-6">
        <div className="content">
          <form onSubmit={updateProduct}>
            <p className="text-center">{msg}</p>
            <div className="my-4">
              <label className="block font-bold mb-2">Name</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Price</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Discount</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="Discount"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Category</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Review</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Review"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Rating</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Description</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Product Quote (S)</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={product_quote_S}
                onChange={(e) => setProduct_quote_S(e.target.value)}
                placeholder="Product Quote (S)"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Product Quote (L)</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={product_quote_L}
                onChange={(e) => setProduct_quote_L(e.target.value)}
                placeholder="Product Quote (L)"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Product Quote (XL)</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={product_quote_XL}
                onChange={(e) => setProduct_quote_XL(e.target.value)}
                placeholder="Product Quote (XL)"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Thumbnail Preview</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={thumbnailPreview}
                onChange={(e) => setThumbnailPreview(e.target.value)}
                placeholder="Thumbnail Preview"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Thumbnail URL 1</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={thumbnailUrl1}
                onChange={(e) => setThumbnailUrl1(e.target.value)}
                placeholder="Thumbnail URL 1"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Thumbnail URL 2</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={thumbnailUrl2}
                onChange={(e) => setThumbnailUrl2(e.target.value)}
                placeholder="Thumbnail URL 2"
              />
            </div>
            <div className="my-4">
              <label className="block font-bold mb-2">Thumbnail URL 3</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={thumbnailUrl3}
                onChange={(e) => setThumbnailUrl3(e.target.value)}
                placeholder="Thumbnail URL 3"
              />
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
