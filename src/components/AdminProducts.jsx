import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortByProductName, setSortByProductName] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortByCategory, setSortByCategory] = useState(false);
  const [sortById, setSortById] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSort = (sortKey) => {
    const updatedSortOptions = {
      sortById: sortKey === "sortById" ? !sortById : false,
      sortByProductName: sortKey === "sortByProductName" ? !sortByProductName : false,
      sortByPrice: sortKey === "sortByPrice" ? !sortByPrice : false,
      sortByCategory: sortKey === "sortByCategory" ? !sortByCategory : false,
    };

    sortProducts(products, updatedSortOptions);

    switch (sortKey) {
      case "sortById":
        setSortById(updatedSortOptions.sortById);
        break;
      case "sortByProductName":
        setSortByProductName(updatedSortOptions.sortByProductName);
        break;
      case "sortByPrice":
        setSortByPrice(updatedSortOptions.sortByPrice);
        break;
      case "sortByCategory":
        setSortByCategory(updatedSortOptions.sortByCategory);
        break;
      default:
        break;
    }
  };

  const sortProducts = (products, sortOptions) => {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
      if (sortOptions.sortById) {
        return a.id - b.id;
      }
      if (sortOptions.sortByProductName) {
        const productNameA = a.detailName.toLowerCase();
        const productNameB = b.detailName.toLowerCase();
        return productNameA.localeCompare(productNameB);
      }
      if (sortOptions.sortByPrice) {
        return a.initialPrice - b.initialPrice;
      }
      if (sortOptions.sortByCategory) {
        const categoryA = a.category.toLowerCase();
        const categoryB = b.category.toLowerCase();
        return categoryA.localeCompare(categoryB);
      }
      return 0;
    });

    setProducts(sortedProducts);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.detailName.toLowerCase();
    return productName.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <h2 className="text-xl font-bold mb-2">List of Products</h2>

      <div className="mb-2">
      <Link
        to="/products/add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded"
      >
        Add New Product
      </Link>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div className="font-semibold">Total All Products: {filteredProducts.length} </div>

      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border-b-2 p-2">No</th>
            <th
              className={`border-b-2 p-2 cursor-pointer ${
                sortById ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSort("sortById")}
            >
              ID
              {sortById ? <span>&uarr;</span> : <span>&darr;</span>}
            </th>
            <th
              className={`border-b-2 p-2 cursor-pointer ${
                sortByProductName ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSort("sortByProductName")}
            >
              Product Name
              {sortByProductName ? <span>&uarr;</span> : <span>&darr;</span>}
            </th>
            <th
              className={`border-b-2 p-2 cursor-pointer ${
                sortByPrice ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSort("sortByPrice")}
            >
              Price
              {sortByPrice ? <span>&uarr;</span> : <span>&darr;</span>}
            </th>
            <th
              className={`border-b-2 p-2 cursor-pointer ${
                sortByCategory ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleSort("sortByCategory")}
            >
              Category
              {sortByCategory ? <span>&uarr;</span> : <span>&darr;</span>}
            </th>
            <th className="border-b-2 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <td className="border-b p-2">{index + 1}</td>
              <td className="border-b p-2">{product.id}</td>
              <td className="border-b p-2">{product.detailName}</td>
              <td className="border-b p-2">{product.initialPrice}</td>
              <td className="border-b p-2">{product.category}</td>
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
