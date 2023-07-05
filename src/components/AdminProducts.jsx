import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3001/products/allProducts");
    const jsonData = response.data.data; // Extract the "data" property from the response
    setProducts(jsonData);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/allProducts/${productId}`);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <h2 className="text-xl font-bold mb-2">List of Products</h2>
      <Link to="/products/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">
        Add New
      </Link>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border-b-2 p-2">No</th>
            <th className="border-b-2 p-2">Product Name</th>
            <th className="border-b-2 p-2">Price</th>
            <th className="border-b-2 p-2">Created By</th>
            <th className="border-b-2 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b p-2">{}</td>
              <td className="border-b p-2">{product.detailName}</td>
              <td className="border-b p-2">{product.initialPrice}</td>
              <td className="border-b p-2">{product.discount}</td>
              <td className="border-b p-2">
                <Link
                  to={`/products/edit/${product.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
