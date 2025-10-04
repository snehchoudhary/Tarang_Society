import React from "react";
import "./Gallery.css";

const galleryImages = [
    "/Gallery01.jpeg",
    "/Gallery02.jpeg",
    "/Gallery03.jpeg",
    "/Gallery04.jpeg",
    "/Gallery05.jpeg",
    "/Gallery06.jpeg",
    "/Gallery07.jpeg",
    "/Gallery08.jpeg",
    "/gallery09.jpeg",
    "/Gallery10.jpeg"
]

const Gallery = () => {
    return (
    <div className="gallery-section">
      <h2>Our Moments</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;