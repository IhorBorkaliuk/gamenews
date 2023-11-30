import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="rounded">
        <Container>
          <Navbar.Brand href="#home">Новини</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#list">Каталог</Nav.Link>
            <Nav.Link href="#features">Рецензії</Nav.Link>
            <Nav.Link href="#pricing">Giveaways</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
