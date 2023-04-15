import React, { useState } from "react";
import { Row, Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const ourNavBar = ({ searching }) => {
  const [word, setWord] = useState("");
  const onSearch = () => {
    searching(word);
    setWord("");
  };
  return (
    <Row className="mb-2">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">مطعمي</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث هنا"
                className="me-2"
                onChange={(e) => setWord(e.target.value)}
                value={word}
              />
              <Button onClick={() => onSearch()} variant="outline-success">
                بحث
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default ourNavBar;
