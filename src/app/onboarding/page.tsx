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
  const departments: string[] = [
    "Aeronautical Engineering",
    "Computer Science and Engineering",
    "Aerospace Engineering",
    "Computer and Communication Engineering",
    "Agri-Informatics",
    "Cyber Security and Forensic",
    "Agricultural Engineering",
    "Dairy Engineering/Technology",
    "Agricultural Science",
    "Design and Manufacturing",
    "Agricultural and Irrigation Engineering",
    "Earth Sciences/Geological Sciences",
    "Aircraft Maintenance Engineering",
    "Electrical and Computer Engineering",
    "Applied Electronics and Instrumentation",
    "Electrical Engineering",
    "Applied Electronics Engineering",
    "Electrical and Electronics Engineering",
    "Applied Mechanics",
    "Electronic Instrumentation and Control",
    "Architecture Engineering",
    "Electronics Sciences",
    "Architecture and Planning",
    "Atmospheric Science",
    "Automobile Engineering",
    "Automotive Design Engineering",
    "Avionics Engineering",
    "Biochemical Engineering",
    "Bio Chemistry",
    "Bio Engineering",
    "Bio Informatics",
    "Bio Medical Engineering",
    "Bio Physics",
    "Bio Science",
    "Bio Technology",
    "Biomedical Instrumentation",
    "Bioprocess Technology",
    "Biotechnology and Biochemical Engineering",
    "Building Engineering and Construction Technology",
    "Carpet and Textile Technology",
    "Carpet Technology",
    "Ceramic Engineering",
    "Ceramic Technology",
    "Ceramics and Cement Technology",
    "Ceramic and Glass Technology",
    "Chemical and Alcohol Technology",
    "Chemical and Bio Engineering",
    "Chemical Engineering",
    "Chemical Science and Technology",
    "Chemical and Electrochemical Engineering",
    "Chemistry/Applied Chemistry",
    "Civil Engineering",
    "Civil Engineering and Planning",
    "Civil Infrastructure Engineering",
    "Civil and Transportation Engineering",
    "Computer Applications",
    "Computer Engineering",
    "Computer Science",
    "Computer Science and Electronic Engineering",
    "Computer Science and Information Technology",
    "Computer Science and Software Engineering",
    "Infrastructure Engineering",
    "Instrumentation and Control Engineering",
    "Instrumentation Engineering",
    "Interior Design",
    "Irrigation and Water Management",
    "Leather Technology",
    "Life Sciences",
    "Life Sciences (Veterinary/Animal Science)",
    "Life Sciences (Botany)",
    "Life Sciences (Zoology)",
    "Man-made Fibre Technology",
    "Manufacturing and Management",
    "Manufacturing Engineering",
    "Manufacturing Technology",
    "Marine Electrical and Electronics Engineering",
    "Marine Engineering",
    "Material and Metallurgical Engineering",
    "Material Science and Engineering",
    "Materials Science and Metal Engineering",
    "Mathematics/Applied Mathematics",
    "Mathematics and Computing",
    "Mechanical and Automation Engineering",
    "Mechanical and Industrial Engineering",
    "Mechanical Engineering",
    "Mechanical Technology",
    "Mechatronics Engineering",
    "Medical Electronics",
    "Metallurgical Engineering",
    "Metallurgy",
    "Metallurgical Engineering and Materials Science",
    "Metallurgy and Materials Science",
    "Microbiology",
    "Mineral Engineering",
    "Mining Engineering",
    "Mining Machinery",
    "Missile Technology",
    "Mobile Computing",
    "Molecular and Cellular Engineering",
    "Nanotechnology",
    "Naval Architecture",
    "Naval Architecture and Offshore Engineering",
    "Naval Architecture and Ship Building",
    "Naval Architecture and Ocean Engineering",
    "Nuclear Power Technology",
    "Nuclear Science and Engineering",
    "Ocean Engineering",
    "Oil and Gas Informatics",
    "Oil Technology",
    "Operational Research",
    "Optics and Optoelectronics",
    "Physical Sciences",
    "Polymer and Coating Technology",
    "Polymer Science and Technology",
    "Polymer Engineering and Technology",
    "Jute and Fibre Technology",
    "Construction Engineering",
    "MSc in Bio Medical Science",
    "Agricultural Biotechnology",
    "Applied Microbiology",
    "Polymer Science",
    "Facilities and Services Planning",
    "Earth and Environmental Science",
  ];

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
            {departments.map((value, index) => {
              return (
                <option key={index} value="Computer Science">
                  Computer Science
                </option>
              );
            })}
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
