import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
} from "chart.js";
import axios from "axios";
Chart.register(LinearScale, CategoryScale, BarElement, Tooltip);

function Registeranalytics() {
  const [loggeddate, setloggeddate] = useState([]);
  const [noofpersons, setnoofpersons] = useState([]);
  const data = {
    labels: loggeddate,
    datasets: [
      {
        label: "No Of Registations",
        data: noofpersons,
        BackGroundColor: "pink",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  const url = "https://localhost:44319/api/Analytics/Getregisters";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setloggeddate(res.data.loggeddatearray);
      setnoofpersons(res.data.noofpersonsarray);
    });
  }, []);

  return (
    <div>
      <nav className="nav">
        <h1>No of Registrations Per Day</h1>
      </nav>
      <div
        className="container"
        style={{
          height: 500,
          width: 1000,
          responsive: "true",
          maintainAspectRatio: "true",
          justifyContent:"center",
          alignitems: "center",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
export default Registeranalytics;
