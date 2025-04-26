import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function BarraNavegacion() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="letratitulo container-fluid bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand className="text-3xl" href="/">Medallion</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="/">Nosotros</Nav.Link>
            <Nav.Link href="/">Servicios</Nav.Link>
            <Nav.Link href="/">Contáctanos</Nav.Link>
            <Nav.Link href="/">FAQ</Nav.Link>
            <Nav.Link href="/">Obtener solución</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
