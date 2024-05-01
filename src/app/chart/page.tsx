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
  ElementChartOptions,
} from "chart.js";
import { DataEntry } from "../dashboard/page";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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

export const BarChart = ({
  datas,
  courseName,
}: {
  datas: DataEntry[];
  courseName: string;
}) => {
  // const [chartData, setChartData] = useState({
  //   labels: [] as any,
  //   datasets: [] as any,
  // });
  const bgColors = [
    "rgba(255, 99, 132, 0.4)",
    "rgba(54, 162, 235, 0.4)",
    "rgba(255, 206, 86, 0.4)",
    "rgba(75, 192, 192, 0.4)",
    "rgba(153, 102, 255, 0.4)",
    "rgba(255, 159, 64, 0.4)",
  ];
  const chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  } = {
    labels: ["EX", "A", "B", "C", "D", "P", "F"],
    datasets: datas.map((data, index) => {
      return {
        label: data.session,
        data: [data.EX, data.A, data.B, data.C, data.D, data.P, data.F],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor:
          bgColors[index]?.toString() ?? "rgba(255, 99, 132, 0.4)",
      };
    }),
  };
  // const [chartOptions, setChartOptions] = useState({});
  
  const chartOptions: {
    plugins: {
      legend: {
        position: unknown;
      };
      title: {
        display: boolean;
        text: string;
      };
    };
    maintainAspectRatio: boolean;
    responsive: boolean;
  } = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: courseName,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  // useEffect(() => {
  // setChartData({
  //   labels: ["EX", "A", "B", "C", "D", "P", "F"],
  //   datasets: datas.map((data, index) => {
  //     return {
  //       label: data.session,
  //       data: [data.EX, data.A, data.B, data.C, data.D, data.P, data.F],
  //       borderColor: "rgb(53, 162, 235)",
  //       backgroundColor: bgColors[index],
  //     };
  //   }),
  // });
  //   setChartOptions({
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //         text: courseName,
  //       },
  //     },
  //     maintainAspectRatio: false,
  //     responsive: true,
  //   });
  // }, []);

  return (
    <>
      <div className="relative m-auto h-[100%]  w-full rounded-lg border bg-white p-4  ">
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
  return <div>{/* <BarChart datas={datas}  /> */}</div>;
}
