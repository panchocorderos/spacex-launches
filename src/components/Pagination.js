import React from "react";
import { LeftArrow, RightArrow } from "./ArrowSvg";

export const Pagination = (props) => {
  const { currentPage, maxPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination">
      <div className="pagination-container">
        <button className="pagination-btn" onClick={onLeftClick}>
          <div className="icon">
            <LeftArrow />
          </div>
        </button>
        <div className="pagination-page">
          <span className="current-page">
            {currentPage} de {maxPages}{" "}
          </span>
        </div>
        <button className="pagination-btn" onClick={onRightClick}>
          <div className="icon">
            <RightArrow />
          </div>
        </button>
      </div>
    </div>
  );
};
