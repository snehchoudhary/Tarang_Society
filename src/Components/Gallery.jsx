import React from "react";
import "./Gallery.css";
import gallery01 from '../assets/gallery01.jpg'
import gallery02 from '../assets/gallery02.jpg'
import gallery03 from '../assets/gallery03.jpg'
import gallery04 from '../assets/gallery04.jpg'
import gallery05 from '../assets/gallery05.jpg'
import gallery06 from '../assets/gallery06.jpg'
import gallery07 from '../assets/gallery07.jpg'
import gallery08 from '../assets/gallery08.jpg'
import gallery09 from '../assets/gallery09.jpg'
import gallery10 from '../assets/gallery10.jpg'


const galleryImages = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10
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
