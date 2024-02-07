import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {
  const location = useLocation()

  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="images/netflix-logo.png" alt="logo" height="55px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className={`nav-link fw-bold${
                  location.pathname === '/' ? ' active' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/tv-shows"
                className={`nav-link fw-bold${
                  location.pathname === '/tv-shows' ? ' active' : ''
                }`}
              >
                TV Shows
              </Link>
              <Link
                to="/movies"
                className={`nav-link fw-bold${
                  location.pathname === '/movies' ? ' active' : ''
                }`}
              >
                Movies
              </Link>
              <Link
                to="/recent"
                className={`nav-link fw-bold${
                  location.pathname === '/recent' ? ' active' : ''
                }`}
              >
                Recently Added
              </Link>
              <Link
                to="/my-list"
                className={`nav-link fw-bold${
                  location.pathname === '/my-list' ? ' active' : ''
                }`}
              >
                My List
              </Link>
            </Nav>
            <Nav className="flex-row align-items-center">
              <Link to="/search" className="nav-link text-white">
                <i className="bi bi-search icons fs-5 mx-3 m-lg-0"></i>
              </Link>
              <Link to="/kids" className="nav-link fw-bold text-white">
                KIDS
              </Link>
              <Link to="/notifications" className="nav-link text-white me-3">
                <i className="bi bi-bell icons fs-5 mx-3 m-lg-0"></i>
              </Link>
              <Link to="/profile" className="nav-link text-white">
                <img src="images/avatar.png" alt="logo" height="49px" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
