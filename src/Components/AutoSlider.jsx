import react, {useEffect, useRef} from "react";
import './AutoSlider.css';
import {useNavigate} from "react-router-dom";

const cards =[
    {id: 1, title: "Tech Club", description: "Where Ideas Meet Innovation.", route: "/tech-club"},
    {id: 2, title: "Cultural Club", description: "Celebrate diversity, create unity.", route: "/cultural-club"},
    {id: 3, title: "Literary Club", description: "Let's idea take flight through words.", route: "/literary-club"},
    {id: 4, title: "Photography Club", description: "Where every click tells a story.", route: "/photography-club"},
  
];

 const AutoSlider = () => {

    const navigate = useNavigate();
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const slider = sliderRef.current;
//         let scrollAmount = 0;
//         const cardWidth = 220;  //card width + gap(200+20)

//         const interval = setInterval(() => {
//             if (slider){
//                 scrollAmount += cardWidth;
//                 if(scrollAmount >= slider.scrollWidth){
//                     scrollAmount= 0;
//                 }
//                 slider.scrollTo({
//                     left: scrollAmount,
//                     behavior: "smooth",
//                 });
//             }
//         }, 2000);  //change slide every 2 sec

//         return () => 
//             clearInterval(interval);
//     }, []);

    return (
        <div className="auto-slider-container">
         <div className="auto-slider">
            {cards.map((card) => (
                <div key={card.id} className="card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
<a href={card.route} target="_blank" rel="noopener noreferrer" className="explore-btn">Explore More</a>
                </div>
            ))}
         </div>
        </div>
    )
}

export default AutoSlider;