import React from "react";
import "./PhotographyClub.css";

export default function PhotographyClub() {
  return (
    <div className="photographyclub-page">
      {/* 🌟 Hero Section */}
      <section className="hero fade-in">
        <div className="hero-overlay">
          <h1> 📸 Photography Club</h1>
          <p>📸✨ Capture the Magic, Frame the Memories, Every Click Tells a Story 🌟📷</p>
          <a href="#join" className="cta-btn">Join the Revolution</a>
        </div>
      </section>

      {/* 👩‍💻 About */}
      <section className="about fade-in">
        <h2>About Us</h2>
        <p>
          <strong>📷✨ Photography Club</strong> is a creative hub for all shutterbugs and visual storytellers! Whether you're a beginner or a pro, this is the place to explore perspectives, capture emotions, and turn ordinary moments into timeless stories. Join us to learn new techniques, go on photo walks, and showcase the world through your unique lens. 🌍📸🌟
        </p>
      </section>

      {/* 🛠️ What We Do */}
      <section className="activities fade-in">
        <h2>What We Do</h2>
        <div className="activity-grid">
          <div className="activity-card">📷 Photography Walks & Challenges – Explore new places and capture stunning shots.</div>
          <div className="activity-card">🖼️ Photo Exhibitions – Showcase your creativity and storytelling skills.</div>
          <div className="activity-card">📱 Themed Contests & Campaigns – Participate and win exciting prizes.</div>
          <div className="activity-card">📝 Poetry Slams & Open Mic Events</div>
          <div className="activity-card">🤝 Collaborative Projects – Work with other clubs and events to create impactful visuals.</div>
          <div className="activity-card">🌟 Social Media Features – Get your best shots featured on our platforms.</div>
        </div>
      </section>

      {/* 📅 Upcoming Events */}
      <section className="events fade-in">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          <div className="event-card">
            <h3>Halloween day</h3>
            <p>📍 8th Oct 2025 | Conference Room</p>
          </div>
          <div className="event-card">
            <h3>Open Mic Event</h3>
            <p>📍 7th Nov 2025 | Activity Hall</p>
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

      {/* 👥 Meet the Team */}
      <section className="team fade-in">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="member-card">
            <img src="/Astha_President.jpeg" alt="Muskan" />
            <h3>Muskan Phogat</h3>
            <p>Head</p>
          </div>
          <div className="member-card">
            <img src="/Himanshi_VicePresident.jpeg" alt="Ishika" />
            <h3>Ishika</h3>
            <p>Deputy Head</p>
          </div>
        </div>
      </section>

      {/* 🤝 Join Us */}
      <section id="join" className="join fade-in">
        <h2>Join Us</h2>
        <p>📸🌟 Have a passion for capturing moments and telling stories through your lens? The Photography Club is the perfect place to sharpen your skills, share your creativity, and see the world from new perspectives. Join us to learn, explore, and create visual stories that leave a lasting impression! 📷✨🌍</p>
        <a
          href="https://forms.gle/your-form-link"
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
        <p>📧 photographyclub@college.edu</p>
        <p>
          🔗 Follow us:{" "}
          <a href="https://instagram.com/techclub" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}
