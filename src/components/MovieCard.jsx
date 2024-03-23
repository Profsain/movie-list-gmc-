import PropTypes from "prop-types"
const MovieCard = ({ title, description, posterUrl, rating }) => {
  const styles = {
    card: {
      width: "300px",
      height: "450px",
      margin: "1rem",
      padding: "1rem",
      borderRadius: "10px",
      boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
      border: "2px solid orange",
    },
    img: {
      width: "100%",
      height: "60%",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "1rem",
    },
  };
  return (
    <div style={styles.card}>
      <img
        style={styles.img}
        src={
          posterUrl
            ? posterUrl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqes1msObZaHMl5CM2VoYNEi2ggficaEKVgdZ1LCBuVEdaIZFgZPSFJpAl41BiDwlqjuI&usqp=CAU"
        }
        alt="poster"
      />

      <h5>{title}</h5>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

MovieCard.propTypes = {
  description: PropTypes.string,
  posterUrl: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string
}

export default MovieCard;
