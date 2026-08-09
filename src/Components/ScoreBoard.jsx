function ScoreBoard({ moves, time, matchedPairs }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        marginBottom: "30px",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "18px",
            color: "lightblue",
          }}
        >
          Moves
        </h3>

        <p
          style={{
            margin: "5px 0 0",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {moves}
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "18px",
            color: "lightblue",
          }}
        >
          Time
        </h3>

        <p
          style={{
            margin: "5px 0 0",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {time}
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "18px",
            color: "lightblue",
          }}
        >
          Pairs
        </h3>

        <p
          style={{
            margin: "5px 0 0",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {matchedPairs}
        </p>
      </div>
    </div>
  );
}

export default ScoreBoard;