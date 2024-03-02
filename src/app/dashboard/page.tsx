"use client";

import { useState } from "react";
import QuickInfoTile from "./quick_info";
import RecommendationTile from "./recommendation_tile";
import PreferenceTile from "./preference_tile";

export default function UserPage() {
  const [checked, setChecked] = useState(false);

  const [goals, setGoals] = useState(
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

  const [preferences, setPreferences] = useState(
    new Map<string, boolean>([
      ["key1", true],
      ["key2", false],
      ["key3", false],
      ["key4", false],
      ["key5", false],
      ["key6", false],
    ]),
  );

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="Dashboard">
      <div className="TopNavBar">
        <h2>Shourya Godha</h2>
      </div>

      <div className="Content">
        <div className="Content-Title">
          <h1>Dashboard</h1>
          <h4>March 1, 2024</h4>
        </div>
        <div className="Quick-Info">
          <QuickInfoTile title="CGPA" value="8.98" />
          <QuickInfoTile title="CGPA" value="8.98" />
          <QuickInfoTile title="CGPA" value="8.98" />
          <QuickInfoTile title="CGPA" value="8.98" />
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
