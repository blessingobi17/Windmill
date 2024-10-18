import TableOne from "../components/TableOne";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Tables = () => {
  const { searchProducts, setProducts } = useContext(DataContext);
  return (
    <main className="py-6 lg:px-10 px-6 pt-6">
      <h1 className="text-2xl font-bold pb-6">Tables</h1>
      <TableOne products={searchProducts} setProducts={setProducts} />
    </main>
  );
};

export default Tables;
