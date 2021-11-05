import React from "react";

import SignUp from "./signup";
import SignIn from "./signin";
import HomePage from "./homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

function App() {
  return (
    <Router>
      <Switch>
        <Grid fluid>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Invoices />} />
          <Route path="/" element={<SignIn />} />
        </Grid>
      </Switch>
    </Router>
  );
}

export default App;
