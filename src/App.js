import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDecision } from '@optimizely/react-sdk';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  
  const [decision] = useDecision('app_test', {
    variables: ['watch_again', 'boolean_variable', 'welcome_message','nav_button_colour']
  });
  const watchAgain = decision?.variables?.watch_again ?? false;
  const navButtonColour = decision?.variables?.nav_button_colour ?? '#ffffff';

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/" style={{ background: navButtonColour }}>Home</Link>
              </li>
              <li>
                <Link to="/watchlist" style={{ background: navButtonColour }}>Watchlist</Link>
              </li>
              {watchAgain && (
                <li>
                  <Link to="/watch-again" style={{ background: navButtonColour }}>
                    Watch Again
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
