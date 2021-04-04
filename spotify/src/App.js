import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home.js";
import PlayList from "./components/PlayList.js";
import Artist from "./components/Artist.js";
import Song from "./components/Song.js";
import Album from "./components/Album.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Spotify</h1>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/song" component={Song} />
          <Route exact path="/artist" component={Artist} />
          <Route exact path="/album" component={Album} />
          <Route exact path="/playlist" component={PlayList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
