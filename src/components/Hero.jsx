import {
  FaPeopleGroup,
  FaMoneyBill,
  FaCartShopping,
  FaMessage,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <main>
      <h1 className="text-2xl lg:font-bold font-semibold">Dashboard</h1>
      <section className="py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between">
        <div
          className="flex items-center gap-4 bg-white dark:bg-gray-900 shadow
           px-5 py-5 rounded-lg border border-gray-100 dark:border-gray-900"
        >
          <div className="bg-orange-100 h-12 w-12 rounded-full flex items-center justify-center">
            <FaPeopleGroup className="text-orange-500 text-xl" />
          </div>
          <span>
            <h2 className="text-sm pb-2 font-medium text-gray-500">
              Total clients
            </h2>
            <p className="text-xl font-semibold">4120</p>
          </span>
        </div>
        <div
          className="flex items-center gap-4 bg-white dark:bg-gray-900 shadow
           px-5 py-5 rounded-lg border border-gray-100 dark:border-gray-900"
        >
          <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center">
            <FaMoneyBill className="text-green-500 text-xl" />
          </div>
          <span>
            <h2 className="text-sm pb-2 font-medium text-gray-500">
              Account balance
            </h2>
            <p className="text-xl font-semibold">$ 87,760</p>
          </span>
        </div>
        <div
          className="flex items-center gap-4 bg-white dark:bg-gray-900 shadow
           px-5 py-5 rounded-lg border border-gray-100 dark:border-gray-900"
        >
          <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
            <FaCartShopping className="text-blue-500 text-xl" />
          </div>
          <span>
            <h2 className="text-sm pb-2 font-medium text-gray-500">
              New sales
            </h2>
            <p className="text-xl font-semibold">280</p>
          </span>
        </div>
        <div
          className="flex items-center gap-4 bg-white dark:bg-gray-900 shadow
           px-5 py-5 rounded-lg border border-gray-100 dark:border-gray-900"
        >
          <div className="bg-purple-100 h-12 w-12 rounded-full flex items-center justify-center">
            <FaMessage className="text-purple-500 text-xl" />
          </div>
          <span>
            <h2 className="text-sm pb-2 font-medium text-gray-500">
              Pending contacts
            </h2>
            <p className="text-xl font-semibold">42</p>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
