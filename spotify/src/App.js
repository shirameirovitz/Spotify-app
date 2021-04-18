import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home.js";
import PlayList from "./components/PlayList.js";
import Artist from "./components/Artist.js";
import Song from "./components/Song.js";
import Album from "./components/Album.js";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Spotify</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/song/:id" component={Song} />
          <Route exact path="/artist/:id" component={Artist} />
          <Route exact path="/album/:id" component={Album} />
          <Route exact path="/playlist/:id" component={PlayList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
