import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "./components/Timer";
import Card from "./components/Card";
import Card1 from "./img/Duvel.png";
import Card2 from "./img/Hapkin.png";
import Card3 from "./img/Paixdieu.png";
import Card4 from "./img/Angelus.png";
import Card5 from "./img/Bush.png";
import Card6 from "./img/Hoegaarden.png";
import Card7 from "./img/Macarons-moulins-dascq-blonde.png";
import Card8 from "./img/Queue-de-charue-blond.jpg";
import "./css/Game.css";

function Game() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  let [resetGame, setResetGame] = useState(false);
  let [IsStarted, setIsStarted] = useState(false);
  const [difficulte, setDifficulte] = useState(0);
  const [cards, setCards] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const text = "Memory Game By Nanash".split(" ");
  const [open, setOpen] = useState(false);
  const items = ["1", "2", "3", "4"];
  const intervalRef = useRef(null);
  const staggerList = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0, scale: 0.3, x: -50 },
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length / 2 && IsStarted === true) {
      console.log("Win!!");
      setIsPaused(true);
    }

    let melangeCard = [
      { pairId: 1, cardId: 1, image: Card1, matched: false },
      { pairId: 1, cardId: 2, image: Card1, matched: false },
      { pairId: 2, cardId: 1, image: Card2, matched: false },
      { pairId: 2, cardId: 2, image: Card2, matched: false },
      { pairId: 3, cardId: 1, image: Card3, matched: false },
      { pairId: 3, cardId: 2, image: Card3, matched: false },
      { pairId: 4, cardId: 1, image: Card4, matched: false },
      { pairId: 4, cardId: 2, image: Card4, matched: false },
      { pairId: 5, cardId: 1, image: Card5, matched: false },
      { pairId: 5, cardId: 2, image: Card5, matched: false },
      { pairId: 6, cardId: 1, image: Card6, matched: false },
      { pairId: 6, cardId: 2, image: Card6, matched: false },
      { pairId: 7, cardId: 1, image: Card7, matched: false },
      { pairId: 7, cardId: 2, image: Card7, matched: false },
      { pairId: 8, cardId: 1, image: Card8, matched: false },
      { pairId: 8, cardId: 2, image: Card8, matched: false },
    ];

    if (IsStarted === false) {
      switch (difficulte) {
        case 0:
          melangeCard = melangeCard.slice(0, 4);
          setCards(melange(melangeCard));
          break;
        case 1:
          melangeCard = melangeCard.slice(0, 8);
          setCards(melange(melangeCard));
          break;
        case 2:
          melangeCard = melangeCard.slice(0, 12);
          setCards(melange(melangeCard));
          break;
        case 3:
          melangeCard = melangeCard.slice(0, 16);
          setCards(melange(melangeCard));
          break;
        default:
          melangeCard = melangeCard.slice(0, 4);
          setCards(melange(melangeCard));
          break;
      }
    }

    if (matchedPairs.length > 0) {
      setSelectedCards([]);
    }
    if (isActive && isPaused === false) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };

  }, [difficulte, isActive, isPaused, matchedPairs, IsStarted, cards.length]);

  const content = cards.map((card) => (
    <Card
      key={`${card.pairId}-${card.cardId}`}
      pairId={card.pairId}
      cardId={card.cardId}
      image={card.image}
      onClick={() => handleCardClick(card.pairId, card.cardId)}
      resetGame={resetGame && !card.matched}
      IsStarted={IsStarted}
    />
  ));

  const handleCardClick = (pairId, cardId) => {
    const selectedCard = { pairId, cardId };

    if (selectedCards.length === 1 && selectedCards[0].pairId === selectedCard.pairId) {
      console.log("Matched");
      setMatchedPairs((prevMatchedPairs) => [...prevMatchedPairs, selectedCard.pairId]);
      setSelectedCards([]);
      setCards(cards.map((card) => (card.pairId === pairId ? { ...card, matched: true } : card)));
    } else if (selectedCards.length === 1 && selectedCards[0].pairId !== selectedCard.pairId) {
      setTimeout(() => {
        console.log("Not Matched");
        setResetGame(true);
        setSelectedCards([]);
      }, 1500);
      setTimeout(() => {
        setResetGame(false);
      }, 1600);
    }

    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, selectedCard]);
    console.log(`ID: ${pairId}, Card ID: ${cardId}, Matched Pairs: ${matchedPairs.length}`);
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="Game">
      <div className="space"></div>
      {text.map((el, i) => (
        <motion.span
          className="Title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      <div className="score">{matchedPairs.length}</div>
      <Timer time={time} />
      <div className="Card_bord">{content}</div>
      <div
        className="btn"
        onClick={() => {
          setIsStarted(true);
          handleStart();
        }}
      >
        Commencer
      </div>
      <div
        className="btn"
        onClick={() => {
          setDifficulte(difficulte);
          setOpen(false);
          setResetGame(true);
          setMatchedPairs([]);
          setSelectedCards([]);
          handleReset();
          setIsStarted(false);
          console.log(`IsStarted: ${IsStarted}`);
          cards.map((card) => (card.matched = false));
        }}
      >
        Recommencer
      </div>
      <motion.button className="btn" onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
        Difficulté
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul
            key="difficulty-menu"
            className="niveauList"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 150, height: 200, opacity: 1 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
          >
            {items.map((item, index) => (
              <motion.li
                className="btn"
                key={index}
                variants={staggerList}
                initial="hidden"
                animate="visible"
                custom={index}
                onClick={() => {
                  setDifficulte(index);
                  setOpen(false);
                  setResetGame(true);
                  setMatchedPairs([]);
                  setSelectedCards([]);
                  handleReset();
                  setIsStarted(false);
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Game;

function melange(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
