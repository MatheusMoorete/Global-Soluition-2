// CardSwiper.js
import PropTypes from "prop-types";
import { motion } from "framer-motion"; 
import "./CardSwiper.css";

function CardSwiper({ title, image, description, link }) {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          className="card-button" 
          onClick={handleButtonClick}
        >
          Leia mais sobre
        </motion.button>
      </div>
    </div>
  );
}

CardSwiper.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, 
};

export default CardSwiper;
