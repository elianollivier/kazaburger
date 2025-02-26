import Rating from "./Rating";

function Testimony({ image, name, rating, review }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Rating rating={rating} />
      <div>{review}</div>
    </div>
  );
}

export default Testimony;
