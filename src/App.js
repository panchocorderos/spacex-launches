import "./styles.css";
import { Navbar } from "./components/Navbar";
import useLaunches from "./hooks/useLaunches";
import { Launch } from "./components/Launch";

import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";
import { Searchbar } from "./components/Searchbar";

function App() {
  const { pages, maxPages, onSearch, nextPage, previousPage, currentPage } = useLaunches();
  
  return (
    <div className="App">
      <Navbar />
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
        pages[currentPage].map((launch) => {
          return (
            <div className="launches-grid">
              <Launch key={launch.name} launch={launch} />
            </div>
          );
        })
      ) : pages.length === 0 ? (
        <div>Not found</div>
      ) : (
        <div>Loading launches... </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
