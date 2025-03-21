import React from "react";

const Button = () => {
  return (
    <>
      <div>
        <button
          onClick={() => alert("it works!")}
          style={{
            backgroundColor: "#2e438f",
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
