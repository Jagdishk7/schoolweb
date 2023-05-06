import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavScroll.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function NavScroll() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid className="flex-space" style={{display:'flex',justifyContent:'space-between'}}>
          <Navbar.Brand href="/">
            <img className="logo" src="assets/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto">
          <div className="social-icons flex-spacee">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark">
        <Container
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#compare">Compare</Nav.Link>
            <Nav.Link href="#faqs">FAQs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScroll;
