import React from "react";
import "./Gallery.css";

const galleryImages = [
    "public/Gallery01.jpeg",
    "public/Gallery02.jpeg",
    "public/Gallery03.jpeg",
    "public/Gallery04.jpeg",
    "public/Gallery05.jpeg",
    "public/Gallery06.jpeg",
    "public/Gallery07.jpeg",
    "public/Gallery08.jpeg",
    "public/gallery09.jpeg",
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