import React, { useState } from "react";
import "../css/Card.css";
import HiddenImage from "../img/Biere.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [IsStarted, setIsStarted] = useState(false);


  useEffect(() => {
    setIsFlipped(false);
    setIsStarted(props.IsStarted);
  }, [props.resetGame, props.IsStarted]);

  const handleClick = () => {
    console.log(`IsStarted: ${IsStarted}`);
    if(IsStarted === true) 
    {
      if (!isFlipped) {
        props.onClick(props.id);
        setIsFlipped(true);
        console.log(`Card clicked with ID: ${props.id}`);
      }
    } 
  };

  return (
    <div className={`card ${isFlipped ? 'card__face' : 'card__'}`}  onClick={handleClick}>
        <motion.div className="box" whileHover={{ scale: [null, 1.35, 1.3] }} transition={{ duration: 0.3 }}>
      <img className="Card_Image" src={isFlipped ? props.image : HiddenImage} alt={`Card ${props.id}`} />
      </motion.div>
    </div>
  );
}

export default Card;