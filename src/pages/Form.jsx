import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const Form = () => {
  const { searchProducts, setProducts } = useContext(DataContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = searchProducts.length
      ? parseInt(searchProducts[searchProducts.length - 1].id)
      : 0;
    const validId = id + 1;
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB");
    const newProduct = {
      id: validId,
      image: URL.createObjectURL(image),
      name,
      category,
      quantity,
      amount,
      date: formattedDate,
      status,
    };

    const allProducts = [newProduct, ...searchProducts];
    setProducts(allProducts);
    localStorage.setItem("productList", JSON.stringify(allProducts));
    navigate("/tables");
  };

  return (
    <main className="pb-6 lg:px-10 px-6 pt-6">
      <h1 className="text-2xl font-bold pb-6">Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="space-y-4">
          <div>
            <label htmlFor="image" className="text-sm">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border border-gray-300 py-2 px-2 mt-1 rounded-md
            dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
            dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-sm">
              Product Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
            dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="text-sm">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
            dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none"
            />
          </div>
          <div>
            <label htmlFor="amount" className="text-sm">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
            dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none"
            />
          </div>
          <div>
            <label htmlFor="status" className="text-sm">
              Status
            </label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
            dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          disabled={
            !image || !name || !category || !quantity || !amount || !status
          }
          className={
            !image || !name || !category || !quantity || !amount || !status
              ? "mt-8 w-full bg-gray-300 py-2 text-white rounded-md cursor-not-allowed"
              : "mt-8 w-full bg-primary py-2 text-white rounded-md"
          }
        >
          Add Product
        </button>
      </form>
    </main>
  );
};

export default Form;
