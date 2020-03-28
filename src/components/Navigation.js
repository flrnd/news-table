import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <>
      <Nav className="mr-auto justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/history">History</Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
    </>
  );
}

export default Navigation;
