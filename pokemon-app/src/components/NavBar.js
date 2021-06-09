import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../images/banner_logo.png';

function NavBar() {
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand href="/">
        <img
          src={banner}
          alt="https://www.pinclipart.com/downpngs/oTRihT_pokemon-brick-bronze-png-banner-library-stock-pokemon/"
          width="200"
          height="100"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav
        justify
        variant="tabs"
      >
        <div>
          <Link to={`/`}>
            <Button variant="outline-dark" size="sm">
              Home
            </Button>
          </Link>
        </div>
      </Nav>
    </Navbar>
  )
}

export default NavBar;