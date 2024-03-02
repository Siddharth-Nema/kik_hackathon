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

export async function getRecommendations(data: string[], pref: number) {
  const response = await fetch("http://127.0.0.1:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ data: data }),
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const recommendations: Course[] = await response.json();

  recommendations.sort(
    (a, b) =>
      pref * b.percent +
      (100 - pref) * b.prevData.avg * 10 -
      (pref * a.percent + (100 - pref) * a.prevData.avg * 10),
  );

  console.log(recommendations);

  // for (let i = 0; i < 100; i++) {
  //   if (recommendations?[i].percent) {
  //     console.log(recommendations[i]);
  //   }
  // }
  return recommendations.slice(0, 10);
}
