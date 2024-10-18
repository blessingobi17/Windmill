import HomeLineChart from "./HomeLineChart";
import HomePieChart from "./HomePieChart";
import HomeBarChart from "./HomeBarChart";
import HomeAreaChart from "./HomeAreaChart";

const HomeCharts = ({ isHome = false }) => {
  const chartHeader = isHome
    ? "text-xl font-semibold pt-4"
    : "text-2xl font-bold";

  return (
    <main className="pt-6">
      <h1 className={chartHeader}>Charts</h1>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-6 w-full">
        <div
          className=" bg-white border dark:bg-gray-900 dark:border-gray-900
        border-gray-100 shadow rounded-lg md:py-4 py-2 px-4"
        >
          <p className="pb-8 font-semibold">Revenue</p>
          <HomePieChart />
        </div>
        <div
          className=" bg-white border dark:bg-gray-900 dark:border-gray-900
        border-gray-100 shadow rounded-lg md:py-4 py-2 px-4"
        >
          <p className="pb-8 font-semibold">Traffic</p>
          <HomeLineChart />
        </div>
      </section>
      <section
        className={
          isHome
            ? "hidden"
            : "grid lg:grid-cols-2 grid-cols-1 gap-6 pt-6 w-full"
        }
      >
        <div
          className=" bg-white border dark:bg-gray-900 dark:border-gray-900
          border-gray-100 shadow rounded-lg md:py-4 py-2 px-4"
        >
          <p className="pb-8 font-semibold">Sales</p>
          <HomeBarChart />
        </div>
        <div
          className=" bg-white border dark:bg-gray-900 dark:border-gray-900
          border-gray-100 shadow rounded-lg md:py-4 py-2 px-4"
        >
          <p className="pb-8 font-semibold">New Customers</p>
          <HomeAreaChart />
        </div>
      </section>
    </main>
  );
};

export default HomeCharts;
