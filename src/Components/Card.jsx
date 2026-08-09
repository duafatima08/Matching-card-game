function Card({ card, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: "midnightblue",
        border: "2px solid royalblue",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "45px",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
        transition: "all 0.3s ease",
      }}
    >
      {card}
    </div>
  );
}

export default Card;