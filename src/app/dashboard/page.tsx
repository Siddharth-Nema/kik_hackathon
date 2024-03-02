"use client";

import { use, useEffect, useState } from "react";
import QuickInfoTile from "./quick_info";
import RecommendationTile from "./recommendation_tile";
import PreferenceTile from "./preference_tile";
import { Slider } from "~/components/ui/slider";
import { cn } from "~/lib/utils";
import { getRecommendations } from "../actions";
import { BarChart } from "../chart/page";
import { getCourseDetails } from "~/actions/user_actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import { cn } from "@/lib/utils"
// import { Slider } from "@/components/ui/slider"

export interface DataEntry {
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

export default function UserPage() {
  const [checked, setChecked] = useState(false);
  const [pref, setPref] = useState(50);
  const [selectedRecommendation, setSelectedRecommendation] = useState<Course>({
    "L-T-P": "3-1-0",
    cid: "MA60002",
    name: "Select a course to view graph",
    percent: 30,
    prevData: {
      avg: 8.608022969647251,
      data: [],
    },
  });
  const [recommendations, setRecommendations] = useState<Course[]>([
    {
      "L-T-P": "3-1-0",
      cid: "MA60002",
      name: "DATA STRUCTURE AND ALGORITHM",
      percent: 30,
      prevData: {
        avg: 8.608022969647251,
        data: [],
      },
    },
    // Add more Course objects as needed
  ]);
  const careerGoals = [
    "Aerospace Engineer",
    "Artificial Intelligence Engineer",
    "Automotive Engineer",
    "Biomedical Engineer",
    "Business Analyst (IT)",
    "Chemical Engineer",
    "Civil Engineer",
    "Cloud Computing Engineer",
    "Construction Manager",
    "Control Systems Engineer",
    "Cybersecurity Analyst",
    "Data Scientist",
    "Database Administrator",
    "Electrical Engineer",
    "Electronics Engineer",
    "Embedded Systems Engineer",
    "Entrepreneur Founder",
    "Environmental Engineer",
    "Game Developer",
    "Geotechnical Engineer",
    "Hardware Engineer",
    "IoT (Internet of Things) Developer",
    "IT Consultant",
    "Materials Engineer",
    "Mechanical Engineer",
    "Mobile App Developer",
    "Network Administrator",
    "Network Engineer",
    "Operations Manager",
    "Patent Analyst",
    "Pharmaceutical Engineer",
    "Power Systems Engineer",
    "Process Engineer",
    "Processing Engineer",
    "Production Engineer",
    "Project Manager (IT)",
    "Quality Assurance Engineer",
    "Renewable Energy Engineer",
    "Research and Development Engineer",
    "Robotics Engineer",
    "Sales Engineer",
    "Software Developer",
    "Structural Engineer",
    "Supply Chain Manager",
    "Systems Analyst",
    "Technical Writer",
    "Telecommunication Engineer",
    "Transportation Engineer",
    "UI-UX Designer",
    "Web Developer",
  ];
  const [goals, setGoals] = useState(
    new Map<string, boolean>(careerGoals.map((goal) => [goal, false])),
  );

  const [preferences, setPreferences] = useState(
    new Map<string, boolean>([
      ["key1", true],
      ["key2", false],
      ["key3", false],
      ["key4", false],
      ["key5", false],
      ["key6", false],
      ["key7", false],
    ]),
  );
  const [currentTab, setCurrentTab] = useState("account");
  function getGoals() {
    const data: string[] = [];

    Array.from(goals.keys()).forEach((value) => {
      if (goals.get(value)) {
        console.log(goals.get(value));
        data.push(value);
      }
    });

    console.log(data);
    return data;
  }

  const handleToggle = () => {
    setChecked(!checked);
  };

  function getDate() {
    const date = new Date();
    const dateAsString =
      date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return dateAsString;
  }

  return (
    <div className="Dashboard">
      <div className=" border-zinc flex items-center  gap-2 border px-24 py-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png"
          alt="Profile"
          width={40}
        />
        <h2 className=" text-xl font-bold">Shourya Godha</h2>
      </div>

      <div className="Content">
        <div className="Content-Title">
          <h1>Dashboard</h1>
          <h4>{getDate()}</h4>
        </div>
        <div className="flex justify-between">
          <QuickInfoTile title="Department" value="Computer Science" />
          <QuickInfoTile title="CGPA" value="11.98" />
          <QuickInfoTile title="Orientation" value="Job" />
          <div className="border-zin flex min-w-96  flex-col justify-center rounded-2xl border p-4 shadow-md">
            <div className="Slider-Tags">
              <h4 className="text-xl font-semibold text-gray-600">CGPA</h4>
              <h4 className="text-xl font-semibold text-gray-600">Skills</h4>
            </div>
            <Slider
              value={[pref]}
              max={100}
              onValueChange={(e) => {
                setPref(e[0] ?? 50);
              }}
              step={2}
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex w-full  justify-between gap-24  ">
            <Tabs
              defaultValue={currentTab}
              className="w-full rounded-2xl border p-4 text-lg shadow-xl"
            >
              <TabsList>
                <TabsTrigger value="account">PREFERENCES</TabsTrigger>
                <TabsTrigger value="stats">STATS</TabsTrigger>
                <TabsTrigger value="details">DETAILS</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="h-[420px]">
                  <div className="h-[520px] overflow-y-auto">
                    <h1 className="text-xl font-bold">Goals</h1>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(goals.keys()).map((title, index) => {
                        return (
                          <PreferenceTile
                            key={index}
                            title={title}
                            onClick={() => {
                              goals.set(title, !goals.get(title));
                            }}
                            status={goals.get(title) ?? false}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="stats">
                <Graph selectedRecommendation={selectedRecommendation} />
              </TabsContent>
              <TabsContent value="details">
                <Details selectedRecommendation={selectedRecommendation} />
              </TabsContent>
            </Tabs>

            <div className="relative h-[600px] w-full overflow-y-auto rounded-2xl border p-4 shadow-xl">
              <div className="sticky -top-4 bg-white py-4 text-2xl font-bold">
                <span>List of recommendations</span>
                <div className="flex justify-between text-xl text-gray-800">
                  <span>Course Name</span>
                  <div className="flex gap-8">
                    <span>Avg CGPA</span>
                    <span>Match %</span>
                  </div>
                </div>
              </div>

              {recommendations.map((course, index) => {
                return (
                  <div
                    key={index}
                    className="Recommendation-List"
                    onClick={() => {
                      // setChecked(false);
                      setSelectedRecommendation(course);
                      console.log(selectedRecommendation);
                      setCurrentTab("stats");
                      setChecked(true);
                    }}
                  >
                    <RecommendationTile
                      title={course.name}
                      avgCGPA={course.prevData.avg}
                      subjectCode={course.percent.toString()}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-2 w-32 rounded bg-black p-2 font-semibold text-white">
            <button
              onClick={async () => {
                setRecommendations(await getRecommendations(getGoals()));
              }}
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Graph({ selectedRecommendation }: { selectedRecommendation: Course }) {
  return (
    <div className="User-Preferences Graph  p-4 ">
      <h1>Graph</h1>
      <div className="Graph-Selector h-[420px] w-full">
        {selectedRecommendation ? (
          <BarChart
            datas={selectedRecommendation?.prevData.data}
            courseName={selectedRecommendation?.name}
          />
        ) : (
          <h1>Select a course to view graph</h1>
        )}
      </div>
    </div>
  );
}

function Details({
  selectedRecommendation,
}: {
  selectedRecommendation: Course;
}) {
  const [courseDetails, setCourseDetails] = useState<{ [key: string]: any }>(
    {},
  );

  useEffect(() => {
    const formData = new FormData();
    formData.append("courseId", selectedRecommendation.cid);
    getCourseDetails(formData).then((data) => {
      setCourseDetails(data);
    });
    // setCourseDetails();
    console.log(courseDetails);
  }, [selectedRecommendation]);

  return (
    <div className="User-Preferences Details h-[420px] p-8">
      <div className="h-[420px]">
        <h1 className="text-xl font-bold">Details</h1>
        <div className="Details-Selector">
          <div className="Details-Row flex gap-4 ">
            <h3 className="tex-lg font-semibold">Course Name : </h3>
            <h3>{courseDetails["name"]}</h3>
          </div>
          <div className="Details-Row flex gap-4">
            <h3 className="tex-lg font-semibold">Course Code :</h3>
            <h3>{courseDetails["id"]}</h3>
          </div>
          <div className="Details-Row flex gap-4">
            <h3 className="tex-lg font-semibold">Syllabus:</h3>
            <h3>{courseDetails["syllabus"]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
