import React from "react";
import "./Team.css";
// import { Linkedin } from "lucide-react";

const teamMembers = [
    {
        name: "Astha Singh",
        role: "President",
        img: "/Astha_President.jpeg",
        Linkedin: "#"
    },
    {
        name: "Himanshi Goyal",
        role: "Vice President",
        img: "/Himanshi_VicePresident.jpeg",
        Linkedin: "#"
    },
    {
        name: "Shrishti",
        role: "Event Manager",
        img: "/Shrishti_EventManager.jpeg",
        Linkedin: "#"
    },
    {
        name: "Simran Bali",
        role: "Treasurer",
        img: "/Simran_Treasurer.jpeg",
        Linkedin: "#"
    }
];

const Team = () => {
   return (
    <div className="team-section">
      <h2>Meet Our Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-social">
              <a href={member.Linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;