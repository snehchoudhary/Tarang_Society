import React from "react";
import "./LiteraryClub.css";
import Literary_Head from '../assets/Literary_Head.jpg'
import Literary_DeputyHead from '../assets/Literary_DeputyHead.jpg'
import literatureMentor from '../assets/literatureMentor.jpg'

export default function LiteraryClub() {
  return (
    <div className="literaryclub-page">
      {/* 🌟 Hero Section */}
      <section className="hero fade-in">
        <div className="hero-overlay">
          <h1>📚 Literary Club</h1>
          <p>Unleash Your Imagination, Where Words Take Flight ✍️📚✨</p>
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
          <strong>📖 Literary Club</strong> is a haven for all who love the power of words ✍️. We explore storytelling, poetry, creative writing, and debates 🗣️, nurturing imagination and expression. Join us to read 📚, write ✨, discuss ideas 💬, and let your creativity soar! 🚀
        </p>
      </section>

      {/* 🛠️ What We Do */}
      <section className="activities fade-in">
        <h2>What We Do</h2>
        <div className="activity-grid">
          <div className="activity-card">✍️ Creative Writing & Storytelling Workshops</div>
          <div className="activity-card">📚 Book Discussions & Reading Circles</div>
          <div className="activity-card">🗣️ Debates & Public Speaking Sessions</div>
          <div className="activity-card">📝 Poetry Slams & Open Mic Events</div>
          <div className="activity-card">🤝 Collaborate with Other Clubs for Campus Events</div>
          <div className="activity-card">🏆 Writing Competitions & Contests</div>
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

      {/* 👥 Meet the Team
      <section className="team fade-in">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="member-card">
            <img src={Literary_Head} alt="Kanak Sharma" />
            <h3>Kanak Sharma</h3>
            <p>Head</p>
          </div>
          <div className="member-card">
            <img src={Literary_DeputyHead} alt="Rakshita Rawat" />
            <h3>Rakshita Rawat</h3>
            <p>Deputy Head</p>
          </div>
        </div>
      </section> */}

{/* 👥 Meet the Team */}
<section className="team fade-in">
  <h2>Meet the Team</h2>

  {/* Main Member */}
  <div className="main-member-card">
    <img src={literatureMentor} alt="Literature Mentor" />
    <h3>Dr. Vinod Saroha</h3>
    <p>Mentor</p>
    <a
      href="https://www.linkedin.com/in/aaradhya-sharma"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-link"
    >
      🔗 LinkedIn
    </a>
  </div>

  {/* Sub Members */}
  <div className="team-grid">
    <div className="member-card">
      <img src={Literary_Head} alt="Kanak Sharma" />
      <h3>Kanak Sharma</h3>
      <p>Head</p>
      <a
        href="https://www.linkedin.com/in/kanak--sharma"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        🔗 LinkedIn
      </a>
    </div>

    <div className="member-card">
      <img src={Literary_DeputyHead} alt="Rakshita Rawat" />
      <h3>Rakshita Rawat</h3>
      <p>Deputy Head</p>
      <a
        href="https://www.linkedin.com/in/rakshita-rawat-b67b66270/"
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
        <p>📖✨ Love words, stories, or debating ideas? The Literary Club is your creative playground! Join us to write, read, share, and express yourself while connecting with fellow bookworms and storytellers. Let your imagination soar and your voice be heard! 🖋️💬📚</p>
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
