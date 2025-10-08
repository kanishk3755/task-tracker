// CompleteAllButton.js
import React from "react";

function CompleteAllButton({ markAllComplete }) {
  return (
    <button onClick={markAllComplete}>
      Mark All Completed
    </button>
  );
}

export default CompleteAllButton;
