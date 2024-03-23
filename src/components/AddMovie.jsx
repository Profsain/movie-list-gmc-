import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddMovie = () => {
    // form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rating, setRating] = useState("");

    // clear field
    const clearField = () => {
        setTitle("");
        setDescription("");
        setPosterUrl("");
        setRating("");
    }

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        // create new movie object
        const newMovie = {
            title: title,
            description: description,
            posterUrl: posterUrl,
            rating: rating,
        };
        
        // get local storage
        // check if local storage is empty, create an empty array
        let movies = JSON.parse(localStorage.getItem("movies")) || [];

        // add new movie to movies array
        movies.push(newMovie);

        // save movies array to local storage
        localStorage.setItem("movies", JSON.stringify(movies));

        // clear field
        clearField();
    }

    return (
      <div className="container">
        <h1>Add New Movie</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter movie title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Description </Form.Label>
            <Form.Control type="text" placeholder="Enter movie description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Poster Url</Form.Label>
            <Form.Control type="text" placeholder="Enter movie poster url" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Enter movie rating (0 - 10" value={rating} onChange={(e) => setRating(e.target.value)}/>
          </Form.Group>

           
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
};

export default AddMovie;
