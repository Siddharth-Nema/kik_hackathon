"use client";

import { useState } from "react";
import QuickInfoTile from "./quick_info";
import RecommendationTile from "./recommendation_tile";
import PreferenceTile from "./preference_tile";
import { Slider } from "~/components/ui/slider";
import { cn } from "~/lib/utils";
// import { cn } from "@/lib/utils"
// import { Slider } from "@/components/ui/slider"

export default function UserPage() {
  const [checked, setChecked] = useState(false);
  const [pref, setPref] = useState(50);

  const [goals, setGoals] = useState(
    new Map<string, boolean>([
      ["Management", false],
      ["Research & Development", false],
      ["Supply Chain Management", false],
      ["Product Management", false],
      ["Sales", false],
      ["Data Science", false],
      ["Product Management", false],
      ["Consulting", false],
      ["Teaching", false],
      ["Government Services", false],
      ["Software Development", false],
      ["Web Development", false],
      ["Financial Analyst", false],
      ["Quantitative Analyst", false],
      ["Entrepreneur", false],
      ["Electronics Engineer", false],
      ["Communication Engineer", false],
      ["Embedded Systems Engineer", false],
      ["Mechanical Engineer", false],
      ["Automotive Engineer", false],
      ["Aerospace Engineer", false],
      ["Civil Engineer", false],
      ["Game Developer", false],
      ["Biomedical Engineer", false],
      ["Biotechnologist", false],
      ["Pharmaceutical Engineer", false],
      ["Mining Engineer", false],
      ["Geological Engineer", false],
      ["Agricultural Engineer", false],
      ["Naval Architect", false],
      ["Ethical Hacker", false],
    ]),
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
      <div className="TopNavBar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png"
          alt="Profile"
        />
        <h2>Shourya Godha</h2>
      </div>

      <div className="Content">
        <div className="Content-Title">
          <h1>Dashboard</h1>
          <h4>{getDate()}</h4>
        </div>
        <div className="Quick-Info">
          <QuickInfoTile title="Department" value="Computer Science" />
          <QuickInfoTile title="CGPA" value="11.98" />
          <QuickInfoTile title="Orientation" value="Job" />
          <div className="Slider">
            <div className="Slider-Tags">
              <h4>CGPA</h4>
              <h4>Skills</h4>
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
        <div className="Main-Content">
          <div className="toggle-slider">
            <input
              type="checkbox"
              id="toggle"
              checked={checked}
              onChange={handleToggle}
            />
            <label htmlFor="toggle" className="slider" />
          </div>
          <div className="Show-Content">
            {!checked ? (
              <div className="User-Preferences">
                <div className="Career-Goals">
                  <h1>Goals</h1>
                  <div className="Goal-Selector">
                    {Array.from(goals.keys()).map((title, index) => {
                      return (
                        <div key={index} className="Preference-Row">
                          <PreferenceTile
                            title={title}
                            onClick={() => {
                              goals.set(title, !goals.get(title));
                            }}
                            status={goals.get(title) ?? false}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="Personal-Interests">
                  <h1>Personal Interests</h1>
                  <div className="Personal-Interest-Selector">
                    {Array.from(preferences.keys()).map((title, index) => {
                      return (
                        <div key={index} className="Preference-Row">
                          <PreferenceTile
                            title={title}
                            onClick={() => {
                              preferences.set(title, !preferences.get(title));
                            }}
                            status={preferences.get(title) ?? false}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="User-Preferences Graph">Graph</div>
            )}

            <div className="Recommendations">
              <h5>List of recommendations</h5>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
              <div className="Recommendation-List">
                <RecommendationTile
                  title="Programming and Data Structures"
                  subjectCode="CS10001"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
