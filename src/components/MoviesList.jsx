import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddMovie from "./AddMovie";
import AllMovies from "./AllMovies";


const MoviesList = () => {
    const [toggleView, setToggleView] = useState(false);

    // handle toggle view
    const handleToggleView = () => {
        setToggleView(!toggleView);
    };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleToggleView}>All Movies</Nav.Link>
              <Nav.Link onClick={handleToggleView}>Add Movie</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
          </Navbar>
          
          {!toggleView ? (<AllMovies />) : (<AddMovie />)}
    </>
  );
};

export default MoviesList;
