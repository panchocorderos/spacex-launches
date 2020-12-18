import "./styles.css";
import { Navbar } from "./components/Navbar";
import useLaunches from "./hooks/useLaunches";
import { Launch } from "./components/Launch";

function App() {
  const { launches, pages, maxPages } = useLaunches();

  console.log({ launches, pages, maxPages });

  return (
    <div className="App">
      <Navbar />
      {launches.map((launch) => {
        return (
          <div className="launches-grid">
            <Launch launch={launch} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
