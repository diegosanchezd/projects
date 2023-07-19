import React from "react";
import "../index.css"

export default function Square({ children, updateBoard, index, isSelected }){
  
  const handleClick = () => {
    updateBoard(index);
  }
  
  return(
    <div onClick={handleClick} className={`square ${isSelected ? "is-selected" : ""}`}>
      {children}
    </div>
  )
} 