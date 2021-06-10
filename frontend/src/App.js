import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Candidates from "./components/Candidates";
import CreateCandidate from "./components/CreateCandidate";

function App() {
  return (
  <Router>
   <Navbar />

   <Route path = "/" exact>
     <Home />
   </Route>

   <Route path = "/notes">
   <Candidates />
   </Route>

   <Route path = "/create">
   <CreateCandidate />
   </Route>
   
  </Router>
  )
}
export default App;
