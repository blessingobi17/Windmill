import { createContext, useState, useEffect } from "react";
import axios from "axios";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedData = localStorage.getItem("productList");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [search, setSearch] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      const fetchData = async () => {
        try {
          const response = await axios.get("products.json");
          setProducts(response.data);
          localStorage.setItem("productList", JSON.stringify(response.data));
        } catch (err) {
          console.log(err.message);
        }
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    const filteredData = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.status.toLowerCase().includes(search.toLowerCase())
    );
    setSearchProducts(filteredData);
  }, [products, search]);

  return (
    <DataContext.Provider
      value={{ products, setProducts, search, setSearch, searchProducts }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
