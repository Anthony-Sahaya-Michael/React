import React from "react";

function Server() {
  const skills = [
    {
      id: 1,
      icon: "bx-badge-check",
      name: "Data Structures & Algorithms",
      level: "Advanced",
    },
    {
      id: 2,
      icon: "bx-badge-check",
      name: "NodeJS",
      level: "intermediate",
    },
    {
      id: 3,
      icon: "bx-badge-check",
      name: "ExpressJS",
      level: "intermediate",
    },
    {
      id: 4,
      icon: "bx-badge-check",
      name: "MongoDB & MySql",
      level: "Advanced",
    },
    {
      id: 5,
      icon: "bx-badge-check",
      name: "REST API Development",
      level: "Advanced"
    },
    {
      id: 6,
      icon: "bx-badge-check",
      name: "Java",
      level: "Advanced",
    },
    {
      id: 7,
      icon: "bx-badge-check",
      name: "Spring Boot",
      level: "Advanced",
    }
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.map((data) => (
            <div key={data.id} className="skills__data">
              <i className={`bx ${data.icon}`}></i>
              <div>
                <h3 className="skills__name">{data.name}</h3>
                <span className="skills__level">{data.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Server;
