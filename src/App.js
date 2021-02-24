import "./styles.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Launches } from "./views/Launches";
import { LaunchDetails } from "./components/LaunchDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/launches" exact component={Launches} />
        <Route path="/launches/:id" exact component={LaunchDetails}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
