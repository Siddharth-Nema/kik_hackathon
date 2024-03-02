"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// "data": [
//                 {
//                     "A": 9,
//                     "B": 3,
//                     "C": 2,
//                     "D": 1,
//                     "EX": 9,
//                     "F": 0,
//                     "P": 0,
//                     "session": "Spring 20"
//                 },
//                 {
//                     "A": 20,
//                     "B": 3,
//                     "C": 3,
//                     "D": 0,
//                     "EX": 28,
//                     "F": 0,
//                     "P": 0,
//                     "session": "Spring 21"
//                 }
//             ]

// interface Datas{
//   datas : Data[]
// }

interface Data {
  A: number;
  B: number;
  C: number;
  D: number;
  EX: number;
  F: number;
  P: number;
  session: string;
}

export const BarChart = ({ datas }: { datas: Data[] }) => {
  const [chartData, setChartData] = useState({
    labels: [] as any,
    datasets: [] as any,
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["EX", "A", "B", "C", "D", "P", "F"],
      datasets: datas.map((data) => {
        return {
          label: data.session,
          data: [data.EX, data.A, data.B, data.C, data.D, data.P, data.F],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        };
      }),
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="relative m-auto h-[50vh] w-full rounded-lg border bg-white p-4 md:col-span-2 lg:h-[70vh]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

const datas = [
  {
    A: 9,
    B: 3,
    C: 2,
    D: 1,
    EX: 9,
    F: 0,
    P: 0,
    session: "Spring 20",
  },
  {
    A: 20,
    B: 3,
    C: 3,
    D: 0,
    EX: 28,
    F: 0,
    P: 0,
    session: "Spring 21",
  },
];
export default function BarChartPage() {
  return (
    <div>
      <BarChart datas={datas} />
    </div>
  );
}
