import "./styles.css";
import { Navbar } from "./components/Navbar";
import useLaunches from "./hooks/useLaunches";
import { Launch } from "./components/Launch";
import { useState } from "react";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";

function App() {
  const { launches, pages, maxPages } = useLaunches();
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    const nextPage = Math.min(currentPage + 1, maxPages - 1);
    setCurrentPage(nextPage);
  };

  const previousPage = () => {
    const previousPage = Math.max(currentPage - 1, 0);
    setCurrentPage(previousPage);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="header">
        <div className="searchbar-container">
          <div className="searchbar">
            <input placeholder="Search launch..." />
          </div>
          <div className="searchbar-btn">
            <button>🔍</button>
          </div>
        </div>
        <Pagination
          currentPage={currentPage + 1}
          maxPages={maxPages}
          onRightClick={nextPage}
          onLeftClick={previousPage}
        />
      </div>
      {pages[currentPage] ? (
        pages[currentPage].map((launch) => {
          return (
            <div className="launches-grid">
              <Launch key={launch.name} launch={launch} />
            </div>
          );
        })
      ) : (
        <div>Loading launches... </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
