import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/profile.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar className="bg-custom-transparent">
        <Container>
          <Navbar.Text href="#home" className="custom-text">
            Account
          </Navbar.Text>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-custom-transparent">
        <Container>
          <Navbar.Text className="custom-text">Custom Text 1</Navbar.Text>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-custom-transparent">
        <Container>
          <Navbar.Text href="#home" className="custom-text">
            Custom Text 2
          </Navbar.Text>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-custom-transparent">
        <Container>
          <Navbar.Text href="#home" className="custom-text">
            Custom Text 3
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
