import React from "react";
import reactDom from "react-dom";
import "./index.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,CategoryScale,LinearScale,BarElement,Title} from 'chart.js';
import { Pie ,Bar} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,LinearScale,BarElement,Title);

const MainContent = () => {
  return (
    <div className="main-container">
      <div className ="heading">Welcome User</div>
      <div className="space-between-div"></div>
      <div className="sub-heading">Choose the best services that fits your requirement</div>
      <div className="space-between-div"></div>
      <div className="cards">
        <div className="card">
        <Pie data={Piedata } />;
        </div>
        <div className="card">

        </div>
        <div className="card">
          <Bar data={Bardata} />
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export const Piedata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const Bardata = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [120,140,199,250,390,500,700],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export default MainContent;