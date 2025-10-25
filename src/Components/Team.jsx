import React from "react";
import "./Team.css";
import { Linkedin } from "lucide-react";
import Vice_president from "../assets/Vice_president.jpg"
import Senior_event_coordinator_treasurer from '../assets/Senior_event_coordinator_treasurer.jpg'
import Senior_event_coordinator from '../assets/Senior_event_coordinator.jpg'
import President from '../assets/President.jpg'
import Social_media_manager from '../assets/Social_media_manager.jpg'
import CoCoordinator1 from '../assets/Co-cordinator1.jpg'
import Coordinator from '../assets/Coordinator.jpg'



const topMembers = [
  {
    name: "Mrs. Sonal Beniwal",
    role: "Coordinator",
    img: Coordinator,
    Linkedin: "https://www.linkedin.com/in/sonal-beniwal-2703bb175/"
  },

  {
    name: "Dr. Sunita Rani",
    role: "Co-Coordinator",
    img: CoCoordinator1,
    Linkedin: "https://www.linkedin.com/in/sonal-beniwal-2703bb175/"
  },
];
const teamMembers = [
    {
        name: "Astha Singh",
        role: "President",
        img: President,
        Linkedin: "http://www.linkedin.com/in/astha-k-"
    },
    {
        name: "Himanshi Goyal",
        role: "Vice President",
        img: Vice_president,
        Linkedin: "https://www.linkedin.com/in/himanshi-goyal-5b3aa3277"
    },
    {
        name: "Srishti",
        role: "Senior Event Coordinator & Treasurer",
        img: Senior_event_coordinator_treasurer,
        Linkedin: "https://www.linkedin.com/in/srishti-b751252a9"
    },
    {
        name: "Simran Bali",
        role: "Senior Event Coordinator",
        img: Senior_event_coordinator,
        Linkedin: "https://www.linkedin.com/in/simran-bali-341a5a31b/"
    },
    {
      name: "Parichita Sharma",
      role: "Social Media Manager",
      img: Social_media_manager,
      Linkedin: "https://www.linkedin.com/in/parichita-sharma-ab4264336"
    }
];

const Team = () => {
   return (
    <div className="team-section">
      <h2>Meet Our Core Team</h2>

      {/* Top Row */}
     
      <div className="team-top">
        {topMembers.map((member, index) => (
          <div className="team-card" key={index}>
            
            <div className="team-img">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <div className="team-social">
            <a href={member.Linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20}/>
            </a>
            </div>
          </div>
        ))}
      </div>

{/* Core team grid */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-social">
              <a   href={member.Linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="linkedin-link"
>
  <Linkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;