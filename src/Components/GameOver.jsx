function GameOver({ moves, time, onRestart }) {
  return (
    <div
      style={{
        minHeight: "250px",
        padding: "40px",
        backgroundColor: "midnightblue",
        border: "2px solid royalblue",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
      }}
    >
      <h2
        style={{
          margin: "0 0 15px",
          fontSize: "36px",
          color: "lightblue",
        }}
      >
        🎉 You Won!
      </h2>

      <p
        style={{
          margin: "5px",
          fontSize: "20px",
          color: "white",
        }}
      >
        Great job! You matched all the cards.
      </p>

      <p
        style={{
          margin: "8px",
          fontSize: "18px",
          color: "lightgray",
        }}
      >
        Moves: {moves} | Time: {time}
      </p>

      <button
        onClick={onRestart}
        style={{
          marginTop: "20px",
          padding: "12px 28px",
          backgroundColor: "royalblue",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        Play Again
      </button>
    </div>
  );
}

export default GameOver;