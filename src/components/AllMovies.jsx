import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "./MovieCard";
const AllMovies = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem",
    },
  };
  // form state
  const [moviesData, setMoviesData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // handle fetch movies from local storage
  const fetchMovies = () => {
    // get movies from local storage
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    return movies;
  };

  // use effect
  useEffect(() => {
    const data = fetchMovies();
    setMoviesData(data);
  }, []);

  return (
    <div className="container my-2">
      <form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </form>

      <div className="mt-4">
        <h1>Best Movies List</h1>

        <div style={styles.grid}>
          {moviesData.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              description={movie.description}
              posterUrl={movie.posterUrl}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
