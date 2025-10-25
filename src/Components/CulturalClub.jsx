import React from "react";
import "./CulturalClub.css";
import Cultural_Head from '../assets/Cultural_Head.jpg'
import Cultural_DeputyHead from '../assets/Cultural_DeputyHead.JPG'
import culturalMentor from '../assets/culturalMentor.jpg'

export default function CulturalClub() {
  return (
    <div className="culturalclub-page">
      {/* 🌟 Hero Section */}
      <section className="hero fade-in">
        <div className="hero-overlay">
          <h1>🎭 Cultural Club</h1>
          <p>🎭 Celebrate Diversity, 🎶 Create Unity, Where Culture Comes Alive! 🌟</p>
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
          <strong>🎭 Cultural Club</strong>  is the heartbeat of creativity and expression at our campus! 🌟 We celebrate diversity, bring people together, and create unforgettable experiences through music 🎶, dance 💃🕺, theater 🎬, art 🎨, and festivals 🎉. Join us to explore your talents, make new friends, and keep the spirit of culture alive! ✨
        </p>
      </section>

      {/* 🛠️ What We Do */}
      <section className="activities fade-in">
        <h2>What We Do</h2>
        <div className="activity-grid">
          <div className="activity-card">🎶 Organize Music & Singing Competitions</div>
          <div className="activity-card">💃 Host Dance Performances</div>
          <div className="activity-card">🤝 🎭 Conduct Drama & Theater Shows</div>
          <div className="activity-card">🎉 Celebrate Festivals & Cultural Events</div>
          <div className="activity-card">🤝 Collaborate with Other Clubs for Campus Events</div>
          <div className="activity-card">🎨 Art Exhibitions & Creative Workshops</div>
        </div>
      </section>

      {/* 📅 Upcoming Events */}
      <section className="events fade-in">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          <div className="event-card">
            <h3>Bollywood day</h3>
            <p>📍 8th Oct 2025 | Conference Room</p>
          </div>
          <div className="event-card">
            <h3>Dance Compeitition</h3>
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

      {/* 👥 Meet the Team
      <section className="team fade-in">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="member-card">
            <img src={Cultural_Head} alt="Tanisha" />
            <h3>Tanisha Bhatia</h3>
            <p>Head</p>
          </div>
          <div className="member-card">
            <img src={Cultural_DeputyHead} alt="Ishiqa" />
            <h3>Ishiqa</h3>
            <p>Deputy Head</p>
          </div>
        </div>
      </section> */}

      {/* 👥 Meet the Team */}
<section className="team fade-in">
  <h2>Meet the Team</h2>

  {/* Main member on top */}
  <div className="main-member-card">
    <img src={culturalMentor} alt="Mentor" />
    <h3>Mrs. Manju</h3>
    <p>Mentor</p>
  </div>

  {/* Two members below */}
  <div className="team-grid">
    <div className="member-card">
      <img src={Cultural_Head} alt="Tanisha" />
      <h3>Tanisha Bhatia</h3>
      <p>Head</p>
    </div>
    <div className="member-card">
      <img src={Cultural_DeputyHead} alt="Ishika" />
      <h3>Ishika</h3>
      <p>Deputy Head</p>
    </div>
  </div>
</section>


      {/* 🤝 Join Us */}
      <section id="join" className="join fade-in">
        <h2>Join Us</h2>
        <p>🎉✨ Love music, dance, art, or theater? The Cultural Club is your stage to shine! Join us to celebrate diversity, express your creativity, make new friends, and be part of unforgettable campus events. Let’s create memories and keep the spirit of culture alive! 💃🕺🎭🎨</p>
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
