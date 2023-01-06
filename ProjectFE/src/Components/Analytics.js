import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  LinearScale,
  CategoryScale,
  plugins,
  Tooltip,
  scales,
} from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";
//import {Chart} from 'chart.js/auto';
Chart.register(
  LinearScale,
  CategoryScale,
  BarElement,
  plugins,
  Tooltip,
  scales
);
//Chart.register(CategoryScale,LinearScale,BarElement,plugins);

export default function Analytics() {
  const [booktypearray, setbooktype] = useState([]);
  const [noofbooksarray, setbooks] = useState([]);

  const data = {
    labels: booktypearray, //["sun","mon","tues","wend","thurs","fri","sat"]
    datasets: [
      {
        label: "No Of Books",
        data: noofbooksarray, //[10,20,30,40,50,60,70]
        backgroundColor: "red",
      },
    ],
  };
  const Options = {
    plugins: {
      legends: {
        position: "top",
      },
      Title: {
        display: "True",
        text: "performance Tracker",
      },
    },
  };

  /*const url="https://localhost:44319/api/Analytics/getbooks";
fetch(url).then(res=>res.json()).then(data=>{
    console.log(data)
setbooktype(data.booktypearray);
setbooks(data.noofbooksarray);
})*/
  const url = "https://localhost:44319/api/Analytics/Getbooks";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);

      setbooktype(res.data.booktypearray);
      setbooks(res.data.noofbooksarray);
    });
  }, []);

  return (
    <>
      <nav className="nav">
        <h1>No of Books Per Each Book Type</h1>
      </nav>

      <div
        style={{
          height: 500,
          width: 1000,
          margin: "auto",
          alignItems: "center",
          responsive: "true",
          maintainAspectRatio: "true",
        }}
      >
        <Bar data={data} options={Options} />
      </div>
    </>
  );
}
