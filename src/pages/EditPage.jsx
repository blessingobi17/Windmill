import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

const EditPage = () => {
  const { products, setProducts } = useContext(DataContext);
  const [editImage, setEditImage] = useState("");
  const [editName, setEditName] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);
  const navigate = useNavigate();

  const handleEditSubmit = (id) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB");
    const updatedProduct = {
      id: parseInt(id),
      image: URL.createObjectURL(editImage),
      name: editName,
      category: editCategory,
      quantity: editQuantity,
      amount: editAmount,
      date: formattedDate,
      status: editStatus,
    };

    const updatedProductsList = products.map((product) =>
      product.id === id ? { ...updatedProduct } : product
    );

    setProducts(updatedProductsList);
    localStorage.setItem("productList", JSON.stringify(updatedProductsList));
    navigate("/tables");
  };

  console.log(editImage);

  useEffect(() => {
    if (product) {
      setEditImage(`/${product.image}`);
      setEditName(product.name);
      setEditCategory(product.category);
      setEditQuantity(product.quantity);
      setEditAmount(product.amount);
      setEditStatus(product.status);
    }
  }, [product]);

  return (
    <main className="pb-6 lg:px-10 px-6 pt-6">
      {product && (
        <>
          <h1 className="text-2xl font-bold pb-6">Edit</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="space-y-4">
              <div>
                <label htmlFor="editImage" className="text-sm">
                  Product Image
                </label>
                <input
                  type="file"
                  id="editImage"
                  onChange={(e) => setEditImage(e.target.files[0])}
                  className="w-full border border-gray-300 py-2 px-2 mt-1 rounded-md
                    dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
                    focus:border-primary outline-none cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="editName" className="text-sm">
                  Product Name
                </label>
                <input
                  type="text"
                  id="editName"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
                dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
              focus:border-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="editCategory" className="text-sm">
                  Product Category
                </label>
                <input
                  type="text"
                  id="editCategory"
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
        dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
          focus:border-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="editQuantity" className="text-sm">
                  Quantity
                </label>
                <input
                  type="text"
                  id="editQuantity"
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(e.target.value)}
                  className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
        dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
          focus:border-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="editAmount" className="text-sm">
                  Amount
                </label>
                <input
                  type="text"
                  id="editAmount"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                  className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
        dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
          focus:border-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="editStatus" className="text-sm">
                  Status
                </label>
                <input
                  type="text"
                  id="editStatus"
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full border border-gray-300 py-2 px-4 mt-1 rounded-md
        dark:bg-transparent dark:border-gray-600 dark:focus:border-primary
          focus:border-primary outline-none"
                />
              </div>
            </fieldset>
            <button
              type="submit"
              onClick={() => handleEditSubmit(product.id)}
              disabled={
                !editImage ||
                !editName ||
                !editCategory ||
                !editQuantity ||
                !editAmount ||
                !editStatus
              }
              className={
                !editImage ||
                !editName ||
                !editCategory ||
                !editQuantity ||
                !editAmount ||
                !editStatus
                  ? "mt-8 w-full bg-gray-300 py-2 text-white rounded-md cursor-not-allowed"
                  : "mt-8 w-full bg-primary py-2 text-white rounded-md"
              }
            >
              Edit Product
            </button>
          </form>
        </>
      )}
      {!product && (
        <section className="text-center pt-8">
          <h2 className="text-2xl font-semibold">Product not found</h2>
          <p className="text-sm py-2">Well, that's disappointing</p>
          <Link to="/">
            <p className=" underline">Visit Our Dashboard</p>
          </Link>
        </section>
      )}
    </main>
  );
};

export default EditPage;
