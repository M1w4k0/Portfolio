import React from "react";
import "./BentoGrid.css";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={`bento-grid ${className || ""}`}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div className={`bento-grid-item ${className || ""}`}>
      {header}
      <div className="bento-grid-item-content">
        {icon}
        <div className="bento-grid-item-title">{title}</div>
        <div className="bento-grid-item-description">{description}</div>
      </div>
    </div>
  );
};
