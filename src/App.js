// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
