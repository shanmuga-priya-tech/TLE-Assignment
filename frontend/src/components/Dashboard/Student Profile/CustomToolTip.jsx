const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "8px",
        }}
      >
        <p style={{ margin: 0, color: "black", fontWeight: "bold" }}>
          {data.name}
        </p>
        <p style={{ margin: 0, color: "blue" }}>Rating: {data.rating}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
