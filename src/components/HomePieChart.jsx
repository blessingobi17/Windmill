import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
  labels: ["Shirts", "Shoes", "Bags"],
  datasets: [
    {
      data: [300, 150, 100],
      backgroundColor: ["#7e3af2", "#36A2EB", "rgba(75,192,192,1)"],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 30,
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8,
      },
    },
  },
  cutout: "80%",
};

const HomePieChart = () => (
  <div className="h-64 flex flex-col items-center">
    <Pie data={data} options={options} />
  </div>
);

export default HomePieChart;
