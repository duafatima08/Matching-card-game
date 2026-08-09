import Card from "./Card";

function GameBoard({
  cards,
  selectedCards,
  matchedCards,
  onCardClick,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 120px)",
        gap: "20px",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      {cards.map((card, index) => {
        const showCard =
          selectedCards.includes(index) ||
          matchedCards.includes(index);

        return (
          <Card
            key={index}
            card={showCard ? card : "❓"}
            onClick={() => onCardClick(index)}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;