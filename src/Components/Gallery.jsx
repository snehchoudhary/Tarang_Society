import React from "react";
import "./Gallery.css";
import gallery01 from '../assets/gallery01.jpg'
import gallery02 from '../assets/gallery01.jpg'
import gallery03 from '../assets/gallery01.jpg'
import gallery04 from '../assets/gallery01.jpg'
import gallery05 from '../assets/gallery01.jpg'
import gallery06 from '../assets/gallery01.jpg'
import gallery07 from '../assets/gallery01.jpg'
import gallery08 from '../assets/gallery01.jpg'
import gallery09 from '../assets/gallery01.jpg'
import gallery10 from '../assets/gallery01.jpg'


const galleryImages = [
  "src/assets/gallery01.jpg",
  "src/assets/gallery02.jpg",
  "src/assets/gallery03.jpg",
  "src/assets/gallery04.jpg",
  "src/assets/gallery05.jpg",
  "src/assets/gallery06.jpg",
  "src/assets/gallery07.jpg",
  "src/assets/gallery08.jpg",
  "src/assets/gallery09.jpg",
  "src/assets/gallery10.jpg"
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