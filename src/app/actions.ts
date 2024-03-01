/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// "use server";

import { redirect } from "next/navigation";

interface DataEntry {
  A: number;
  B: number;
  C: number;
  D: number;
  EX: number;
  F: number;
  P: number;
  session: string;
}

interface PrevData {
  avg: number;
  data: DataEntry[];
}

interface Course {
  "L-T-P": string;
  cid: string;
  name: string;
  percent: number;
  prevData: PrevData;
}

export async function navigateToDashboard() {
  redirect(`/dashboard`);
}

export async function getRecommendations(data: string[]) {
  const response = await fetch("http://127.0.0.1:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ data: data }),
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const recommendations: Course[] = await response.json();

  recommendations.sort((a, b) => b.percent - a.percent);

  console.log(recommendations);

  // for (let i = 0; i < 100; i++) {
  //   if (recommendations?[i].percent) {
  //     console.log(recommendations[i]);
  //   }
  // }
  return recommendations;
}
