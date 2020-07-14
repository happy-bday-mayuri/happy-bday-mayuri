import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
