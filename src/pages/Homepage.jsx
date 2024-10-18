import Hero from "../components/Hero";
import TableOne from "../components/TableOne";
import HomeCharts from "../components/HomeCharts";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Homepage = () => {
  const { searchProducts, setProducts } = useContext(DataContext);
  return (
    <main className="py-6 lg:px-10 px-6">
      <Hero />
      <TableOne
        products={searchProducts}
        setProducts={setProducts}
        isHome={true}
      />
      <HomeCharts isHome={true} />
    </main>
  );
};

export default Homepage;
