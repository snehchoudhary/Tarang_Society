// import React, { useEffect, useState } from "react";
// import "./About.css";

// const slides = [
//   {
//     title: "About Us",
//     content: `Welcome to the Tarang Society, the heart of student life at BPSMV, Khanpur Kalan! 🌟 
// Initiated in 2024, our society was created by students, for students with one simple goal: 
// to make college more than just lectures and exams. We’re here to build a vibrant community 
// where ideas are shared, talents are discovered, and friendships are made that last a lifetime.`,
// img: "public/AboutUs_Tarang.jpg"
//   },
//   {
//     title: "Our Vision",
//     content: `To create a campus culture where every student feels inspired to explore, 
// express, and excel both inside and outside the classroom.`,
//   },
//   {
//     title: "Our Mission",
//     content: `• Provide a platform where students can learn, lead, and grow through creative and collaborative opportunities. 
// • Organize events, competitions, and workshops that bring students together. 
// • Nurture leadership, creativity, teamwork, and social responsibility beyond academics.`,
//   },
//   {
//     title: "What We Do",
//     content: `Our society is home to diverse clubs: 💻 Tech, 🎨 Cultural, ✍️ Literary, 📸 Photography.
// Together, we aim to make college a space where you can discover what you love, do what excites you, and grow into the best version of yourself.`,
//   },
// ];

// const About = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 9000); // 4 sec auto-slide

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="about-slider-container">
//       <div className="about-slider">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${index === current ? "active" : ""}`}
//           >
//             <h2>{slide.title}</h2>
//             <p>{slide.content}</p>
//           </div>

//           <div className="slide-image">
//             <img src={slide.img} alt={slide.title} />
//           </div>
//         ))}
//       </div>
//       <div className="dots">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === current ? "active-dot" : ""}`}
//             onClick={() => setCurrent(i)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useEffect, useState } from "react";
import "./About.css";
import About_us from '../assets/About_us.jpg'
import Our_vision from '../assets/Our_vision.jpg'
import Our_mission from '../assets/Our_mission.jpg'
import What_we_do from '../assets/What_we_do.jpg'

const slides = [
  {
    title: "About Us",
    content: `Welcome to the Tarang Society, the heart of student life at BPSMV, Khanpur Kalan! 🌟 
Initiated in 2024, our society was created by students, for students with one simple goal: 
to make college more than just lectures and exams. We’re here to build a vibrant community 
where ideas are shared, talents are discovered, and friendships are made that last a lifetime.`,
    img: About_us, // ✅ place this image in public folder
  },
  {
    title: "Our Vision",
    content: `To create a campus culture where every student feels inspired to explore, 
express, and excel both inside and outside the classroom.`,
    img: Our_vision, // optional image
  },
  {
    title: "Our Mission",
    content: `• Provide a platform where students can learn, lead, and grow through creative and collaborative opportunities. 
• Organize events, competitions, and workshops that bring students together. 
• Nurture leadership, creativity, teamwork, and social responsibility beyond academics.`,
    img: Our_mission, // optional image
  },
  {
    title: "What We Do",
    content: `Our society is home to diverse clubs: 💻 Tech, 🎨 Cultural, ✍️ Literary, 📸 Photography.
Together, we aim to make college a space where you can discover what you love, do what excites you, and grow into the best version of yourself.`,
    img: What_we_do, // optional image
  },
];

const About = () => {

  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000); // 4 sec auto-slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-slider-container">
      <div className="about-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-wrapper ${index === current ? "active" : ""}`}
          >
            <div className="slide-text">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>

            {slide.img && (
              <div className="slide-image">
                <img src={slide.img} alt={slide.title} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active-dot" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default About;
