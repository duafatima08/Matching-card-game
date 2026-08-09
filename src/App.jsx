import { useEffect, useState } from "react";

import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";

function App() {
  const [cards, setCards] = useState([
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍊",
    "🍉",
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍊",
    "🍉",
  ]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) {
      return;
    }

    const timer = setInterval(() => {
      setTime((previousTime) => previousTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver]);

  const handleCardClick = (index) => {
    if (selectedCards.length === 2) {
      return;
    }

    if (selectedCards.includes(index)) {
      return;
    }

    if (matchedCards.includes(index)) {
      return;
    }

    const newSelectedCards = [...selectedCards, index];

    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      setMoves((previousMoves) => previousMoves + 1);

      const firstCard = cards[newSelectedCards[0]];
      const secondCard = cards[newSelectedCards[1]];

      if (firstCard === secondCard) {
        setMatchedCards((previousMatchedCards) => [
          ...previousMatchedCards,
          ...newSelectedCards,
        ]);

        setMatchedCards((previousMatchedCards) => {
          const totalMatchedCards =
            previousMatchedCards.length + 2;

          if (totalMatchedCards === cards.length) {
            setGameOver(true);
          }

          return previousMatchedCards;
        });

        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  const restartGame = () => {
    setSelectedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setTime(0);
    setGameOver(false);
  };

  const formattedTime = `${String(
    Math.floor(time / 60)
  ).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, midnightblue, darkslateblue, black)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {!gameOver && (
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* Left Side */}
          <div
            style={{
              flex: "1",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              🧠
              <br />
              Memory Card Game
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "lightblue",
                marginBottom: "35px",
              }}
            >
              Match all the pairs and test your memory!
            </p>

            <ScoreBoard
              moves={moves}
              time={formattedTime}
              matchedPairs={matchedCards.length / 2}
            />
          </div>

          {/* Right Side */}
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GameBoard
              cards={cards}
              selectedCards={selectedCards}
              matchedCards={matchedCards}
              onCardClick={handleCardClick}
            />
          </div>
        </div>
      )}

      {gameOver && (
        <GameOver
          moves={moves}
          time={formattedTime}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default App;