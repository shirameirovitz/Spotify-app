import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";

function NotExist() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default NotExist;
