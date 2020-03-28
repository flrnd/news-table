import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./page/SearchPage";
import HistoryPage from "./page/HistoryPage";
import Navigation from "./components/Navigation";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/" exact component={SearchPage} />
              <Route path="/history" exact component={HistoryPage} />
              <Route component={NoMatchRoute} />
            </Switch>
          </Router>
        </Col>
      </Row>
      <Row>
        <footer>
          <div style={{ paddingTop: "20px" }}>
            <a href="https://newsapi.org/">Powered By NewsAPI.org</a>
          </div>
        </footer>
      </Row>
    </Container>
  );
}

export default App;
