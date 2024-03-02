"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import { navigateToDashboard } from "../actions";

interface FormData {
  rollNumber: string;
  department: string;
  preference: string;
  name: string;
}

export default function OnBoardingPage() {
  const [formData, setFormData] = useState<FormData>({
    rollNumber: "",
    department: "",
    preference: "",
    name: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    await navigateToDashboard();
  };

  return (
    <div className="OnBoardingPage">
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Department:
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            {/* Add more department options as needed */}
          </select>
        </label>
        <br />
        <label>
          Preference:
          <input
            type="radio"
            name="preference"
            value="Skill"
            checked={formData.preference === "Skill"}
            onChange={handleInputChange}
          />{" "}
          Skill
          <input
            type="radio"
            name="preference"
            value="CGPA"
            checked={formData.preference === "CGPA"}
            onChange={handleInputChange}
          />{" "}
          CGPA
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
