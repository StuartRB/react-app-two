import React from "react";

console.log("BIG HAIRY ARSES!");

const Button = () => {
  return (
    <>
      <div>
        <button
          onClick={() => alert("it works!")}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          React App Two Button
        </button>
      </div>
    </>
  );
};

export default Button;
