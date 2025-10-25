import React from "react";
import "./TechClub.css";
//import bg-tech from '../assets/bg-tech.jpg'
import Tech_DeputyHead from '../assets/Tech_DeputyHead.jpg'
import Tech_Head from '../assets/Tech_Head.jpeg'
import techMentor from '../assets/techMentor.jpg'

export default function TechClub() {
  return (
    <div className="techclub-page">
      {/* 🌟 Hero Section */}
      <section className="hero fade-in">
        <div className="hero-overlay">
          <h1>🚀 Tech Club</h1>
          <p>Innovate. Build. Disrupt. Where Ideas Come Alive 💡</p>
          <a href="https://forms.gle/vgKYLac1EWSXrrUk7"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn">Join the Revolution</a>
        </div>
      </section>

      {/* 👩‍💻 About */}
      <section className="about fade-in">
        <h2>About Us</h2>
        <p>
          <strong>Tech Club</strong> is a student-driven hub dedicated to exploring
          emerging technologies, building impactful projects, and solving real-world
          challenges. Our mission is to turn creative ideas into innovative solutions
          that shape the future.
        </p>
      </section>

      {/* 🛠️ What We Do */}
      <section className="activities fade-in">
        <h2>What We Do</h2>
        <div className="activity-grid">
          <div className="activity-card">💻 Coding Workshops</div>
          <div className="activity-card">🚀 Hackathons & Competitions</div>
          <div className="activity-card">🤝 Guest Speaker Sessions</div>
          <div className="activity-card">🛠️ Open Source Projects</div>
        </div>
      </section>

      {/* 📅 Upcoming Events */}
      <section className="events fade-in">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          <div className="event-card">
            <h3>🛠️ Ideathon 2025</h3>
            <p>📍 7th Nov 2025 | Activity Hall</p>
          </div>
          <div className="event-card">
            <h3> 🤖Tech Fest 2026</h3>
            <p>📍 Feb Nov 2026 | Department Ground</p>
          </div>
        </div>
      </section>

      {/* 🏆 Past Highlights */}
      <section className="highlights fade-in">
        <h2>Past Highlights</h2>
        <ul>
          <li>🏆 Secured 2nd place at <strong>National HackFest 2024</strong></li>
          <li>📈 Hosted 10+ workshops with <strong>500+ participants</strong></li>
          <li>🤖 Built 5+ Open Source Tech Tools</li>
        </ul>
      </section>

      {/* 👥 Meet the Team
      <section className="team fade-in">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="member-card">
            <img src={Tech_Head} alt="Sneha" />
            <h3>Sneha Choudhary</h3>
            <p>Head</p>
          </div>
          <div className="member-card">
            <img src= {Tech_DeputyHead} alt="Jhalak" />
            <h3>Jhalak</h3>
            <p>Deputy Head</p>
          </div>
        </div>
      </section> */}

       {/* 👥 Meet the Team */}
      <section className="team fade-in">
        <h2>Meet the Team</h2>

        {/* Main member on top */}
        <div className="main-member-card">
          <img src={techMentor} alt="Saya" />
          <h3>Mrs. Saya</h3>
          <p>Mentor</p>
          <a
            href="https://www.linkedin.com/in/aarav-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            🔗 LinkedIn
          </a>
        </div>

        {/* Two members below */}
        <div className="team-grid">
          <div className="member-card">
            <img src={Tech_Head} alt="Sneha" />
            <h3>Sneha Choudhary</h3>
            <p>Head</p>
            <a
              href="www.linkedin.com/in/sneha-choudhary-58a5552a8"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              🔗 LinkedIn
            </a>
          </div>

          <div className="member-card">
            <img src={Tech_DeputyHead} alt="Jhalak" />
            <h3>Jhalak</h3>
            <p>Deputy Head</p>
            <a
              href=" https://www.linkedin.com/in/jhalak-p-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 🤝 Join Us */}
      <section id="join" className="join fade-in">
        <h2>Join Us</h2>
        <p>💻🚀 Passionate about technology, coding, or innovation? The Tech Club is your playground to build, learn, and create! Join us to collaborate on exciting projects, attend workshops, participate in hackathons, and turn your ideas into real-world solutions. Let’s innovate together and shape the future! 🛠️🤖✨</p>
        <a
          href="https://forms.gle/vgKYLac1EWSXrrUk7"
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          Register Now
        </a>
      </section>

      {/* 📬 Contact */}
      <footer className="contact fade-in">
        <h2>Contact Us</h2>
        <p>📧 tarangcseit@bpswomenuniversity.ac.in</p>
        <p>
          🔗 Follow us:{" "}
          <a href="https://www.instagram.com/tarang_cse.it?igsh=ZzdpM3YyYzUydmox" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}
