import React from 'react'
import "../styles.css";
import { useLaunches } from "../hooks/useLaunches";
import { Launch } from "../components/Launch";
import { Pagination } from "../components/Pagination";
import { Searchbar } from "../components/Searchbar";

export const Launches = () => {
  const { pages, maxPages, onSearch, nextPage, previousPage, currentPage, loading } = useLaunches();
  if (loading) {
    return (
      <div>Loading launches... </div>
    );
  }
  return (
    <div className="App">
      <div className="header">
        <Searchbar onSearch={onSearch} />
        <Pagination
          currentPage={currentPage + 1}
          maxPages={maxPages}
          onRightClick={nextPage}
          onLeftClick={previousPage}
        />
      </div>
      {pages[currentPage] ? (
        pages[currentPage].reverse().map((launch) => {
          return (
            <div className="launches-grid">
              <Launch key={launch.name} launch={launch} />
            </div>
          );
        })
      ) : (
        <div>Not found</div>
      )
    }
    </div>
  )
}
