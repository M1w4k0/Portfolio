import React from "react";
import { Timeline } from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      date: "2020",
      content: (
        <div className="timeline-item">
          <img src="./assets/Orange.png" className="logoexp" />
          <div>
            <h3 className="title-timeline">Internship at Orange Innovation</h3>
            <p className="timeline-paragraph">
              Operational Marketing research project – Discovering the world of data – Introduction to telecommunication networks
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "2023",
      content: (
        <div className="timeline-item">
          <img src="./assets/Neoma.png" className="logoexp" />
          <div>
            <h3 className="title-timeline">NEOMA BS Paris student</h3>
            <p className="timeline-paragraph">
              TEMA Program (Management and Tech) – Courses taken: Fundamental Marketing, Accounting, Graphic and Digital Design, Information Systems and Data Modeling – Several projects in web development initiation
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "Apr 2024",
      content: (
        <div className="timeline-item">
          <img src="./assets/MH.jpg" className="logoexp" />
          <div>
            <h3 className="title-timeline">Internship at Malakoff Médéric</h3>
            <p className="timeline-paragraph">
              Benchmarking for mutual health and provident insurance offers – SEO optimization for their website – Creation of marketing materials for international partners
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "Oct 2024",
      content: (
        <div className="timeline-item">
          <img src="./assets/Epitech.png" className="logoexp" />
          <div>
            <h3 className="title-timeline">Exchange to EPITECH Barcelona</h3>
            <p className="timeline-paragraph">
              Immersive semester focusing on programming and software development – Courses taken: Full-stack development, Algorithms, Data Structures, and Project Management – Writing and debugging code, building web applications, learning programming languages, and collaborating on development projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "June 2025",
      content: (
        <div className="timeline-item">
          <img src="./assets/Thales.jpg" className="logoexp" />
          <div>
            <h3 className="title-timeline">Internship at Thalès Digital Factory</h3>
            <p className="timeline-paragraph">
              Development of internal tools using Python – Automation of data workflows and APIs – Collaboration with cross-functional agile teams to enhance internal digital solutions.
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "Jan 2026",
      content: (
        <div className="timeline-item">
          <img src="./assets/Queens.png" className="logoexp1" />
          <div>
            <h3 className="title-timeline">Exchange to Queen's University, Kingston</h3>
            <p className="timeline-paragraph">
              Specialization in Business Development, Finance, and Supply Chain – Courses on strategy, financial modeling, and operations management – Immersive experience in North American business culture and project-based learning.
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "Sept 2027",
      content: (
        <div className="timeline-item">
          <img src="./assets/Centrale.png" className="logoexp" />
          <div>
            <h3 className="title-timeline">Double diploma at Centrale Sup'Elec</h3>
            <p className="timeline-paragraph">
              Interdisciplinary program bridging engineering and management – Focus on innovation, product lifecycle, and tech strategy – Team projects combining software development, market analysis, and leadership.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
