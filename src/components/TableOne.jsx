import {
  FaChevronLeft,
  FaChevronRight,
  FaTrashCan,
  FaPen,
} from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const TableOne = ({ products, setProducts, isHome = false }) => {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 0;
  });
  const itemsPerPage = 7;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
      localStorage.setItem("currentPage", page);
    }
  };

  const handleChevronRightClick = () => {
    handlePageChange(currentPage + 1);
  };

  const handleChevronLeftClick = () => {
    handlePageChange(currentPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handleDelete = (id) => {
    const productList = products.filter((product) => product.id !== id);
    setProducts(productList);
    localStorage.setItem("productList", JSON.stringify(productList));

    const newTotalPages = Math.ceil(productList.length / itemsPerPage);

    if (currentPage >= newTotalPages) {
      const newPage = Math.max(newTotalPages - 1, 0);
      setCurrentPage(newPage);
      localStorage.setItem("currentPage", newPage);
    }
  };

  return (
    <>
      <main className="lg:overflow-x-auto overflow-x-scroll">
        <table
          className="w-full border-collapse border border-gray-300 dark:border-gray-900
         text-sm"
        >
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900">
              <th className="text-left py-4 lg:px-4 md:px-6 px-4">Product</th>
              <th className="text-left py-4 lg:px-4 md:px-8 px-4">Quantity</th>
              <th className="text-left py-4 lg:px-4 md:px-6 px-4">Price</th>
              <th className="text-left py-4 lg:px-4 md:px-6 px-4">Date</th>
              <th className="text-left py-4 lg:px-4 md:px-6 px-4">Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => {
              const statusClass =
                product.status === "Published"
                  ? "bg-green-100 text-green-600 px-3 py-1 rounded-3xl font-semibold text-xs"
                  : product.status === "Pending"
                  ? "bg-orange-100 text-orange-600 px-3 py-1 rounded-3xl font-semibold text-xs"
                  : product.status === "Draft"
                  ? "bg-red-100 text-red-600 px-3 py-1 rounded-3xl font-semibold text-xs"
                  : "";
              return (
                <tr key={product.id}>
                  <td className="border-b border-b-gray-300 dark:border-b-gray-900 py-4 lg:px-4 md:px-6 px-4 font-bold">
                    <div className="flex gap-2">
                      <img
                        src={product.image}
                        alt=""
                        className="h-10 w-10 rounded-full md:block hidden"
                      />
                      <span className="whitespace-nowrap">
                        {product.name}
                        <p className="font-normal">{product.category}</p>
                      </span>
                    </div>
                  </td>
                  <td className="border-b border-b-gray-300 dark:border-b-gray-900 py-4 lg:px-4 md:px-8 px-4">
                    {product.quantity}
                  </td>
                  <td className="border-b border-b-gray-300 dark:border-b-gray-900 py-4 lg:px-4 md:px-6 px-4 whitespace-nowrap">
                    $ {product.amount}
                  </td>

                  <td className="border-b border-b-gray-300 dark:border-b-gray-900 py-4 lg:px-4 md:px-6 px-4">
                    {product.date}
                  </td>
                  <td className="border-b border-b-gray-300 dark:border-b-gray-900 py-4 lg:px-4 md:px-6 px-4">
                    <span className={statusClass}>{product.status}</span>
                  </td>
                  <td
                    className={
                      isHome
                        ? "hidden"
                        : "border-b border-b-gray-300 dark:border-b-gray-900 py-4 lg:px-4 md:px-6 px-4 cursor-pointer"
                    }
                  >
                    <Link to={`/edit/${product.id}`}>
                      <FaPen />
                    </Link>
                  </td>
                  <td
                    className={
                      isHome
                        ? "hidden"
                        : "border-b border-b-gray-300 dark:border-b-gray-900 text-red-500 py-4 lg:px-4 md:px-6 px-4 cursor-pointer"
                    }
                    onClick={() => handleDelete(product.id)}
                  >
                    <FaTrashCan />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <div
        className="bg-gray-100 dark:bg-gray-900 flex md:flex-row flex-col w-full justify-between 
      pl-4 pr-8 py-4 font-semibold text-sm"
      >
        <p>
          {`Showing ${startIndex + 1}-${Math.min(endIndex, products.length)} of
          ${products.length}`}
        </p>
        <div className="flex gap-6 items-center text-xs  md:pt-0 pt-4">
          <button disabled={currentPage === 0}>
            <FaChevronLeft
              onClick={handleChevronLeftClick}
              className={currentPage === 0 ? "text-gray-400" : ""}
            />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-2 py-1 rounded-md cursor-pointer ${
                currentPage === index ? "bg-primary text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button disabled={currentPage + 1 === totalPages}>
            <FaChevronRight
              onClick={handleChevronRightClick}
              className={currentPage + 1 === totalPages ? "text-gray-400" : ""}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TableOne;
