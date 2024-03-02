"use client";

import { useEffect, useState } from "react";
import { navigateToDashboard } from "../actions";

export default function SignUp() {
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

  interface FormData {
    rollNumber: string;
    department: string;
    cgpa: string;
    name: string;
  }
  const [formData, setFormData] = useState<FormData>({
    rollNumber: "",
    department: "",
    cgpa: "",
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

    localStorage.setItem("name", formData.name);
    localStorage.setItem("department", formData.department);
    localStorage.setItem("cgpa", formData.cgpa);
    localStorage.setItem("rollNumber", formData.rollNumber);

    await navigateToDashboard();
  };

  const navigate = async () => {
    if (localStorage.getItem("name")) {
      await navigateToDashboard();
    }
  };

  useEffect(() => {
    void navigate();
  }, []);

  return (
    <div className="SignUp">
      <div className="twoboxes">
        <div className="divimg">
          <img
            src="https://botup.com/images/blog/chatbot-app-2.png?v=1685597433119865848"
            alt="Image"
            className="image"
          />
        </div>
        <div className="rightcont">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            ></input>

            <label>Roll No.:</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
              required
            ></input>

            <label>Department:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            >
              <option value="">Select Department</option>
              {departments.map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>

            <label>CGPA:</label>
            <input
              type="text"
              id="cpga"
              name="cgpa"
              onChange={handleInputChange}
              required
            ></input>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
