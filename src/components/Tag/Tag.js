import React from "react";

function Tag({ text, color }) {
  const styles = {
    borderRadius: "5px",
    marginRight: "5px",
    marginBottom: "5px",
    padding: "5px",
    background: color,
    color: "white"
  };

  return (
    <div className="tag" style={styles}>
      {text}
    </div>
  );
}

export default Tag;
