import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./page/SearchPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Router>
              <Switch>
                <Route path="/" exact component={SearchPage} />
                <Route component={NoMatchRoute} />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
      <footer>
        <div style={{ paddingTop: "20px" }}>
          <a href="https://newsapi.org/">Powered By NewsAPI.org</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
