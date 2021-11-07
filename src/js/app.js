import React from "react";

import SignUp from "./signup";
import SignIn from "./signin";
import HomePage from "./homepage";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

function App() {
  return (
    <Router>
      <Routes>
        <Grid fluid>
          <Route path="/"  exact element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Grid>
      </Routes>
    </Router>
  );
}

export default App;
