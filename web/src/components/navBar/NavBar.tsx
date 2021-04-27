import { Navbar as BootstrapNavBar, Nav } from 'react-bootstrap';

const NavBar = () => (
  <div>
    <div className="row">
      <div className="col-md-12" style={{ paddingRight: '0px' }}>
        <BootstrapNavBar bg="dark" variant="dark" expand="lg" sticky="top">
          <BootstrapNavBar.Brand href="#home">
            Simple Weather
          </BootstrapNavBar.Brand>
          <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://github.com/aaronb97/simpleWeather">
                GitHub
              </Nav.Link>
            </Nav>
          </BootstrapNavBar.Collapse>
        </BootstrapNavBar>
        <br />
      </div>
    </div>
  </div>
);

export default NavBar;
