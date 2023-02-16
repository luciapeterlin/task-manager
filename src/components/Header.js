import { memo } from "react";
import { Navbar, Container } from 'react-bootstrap';

function Header ({title}) {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container className="ml-0">
        <Navbar.Brand href="#">{title }</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default memo(Header);