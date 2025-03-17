import React from "react";

const MegaButton = () => {
  return (
    <>
      <div>
        <button
          onClick={() => alert("it works, mega!")}
          style={{
            backgroundColor: "#f026ce",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "15px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          React App Two MegaButton
        </button>
      </div>
    </>
  );
};

export default MegaButton;
