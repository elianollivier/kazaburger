function SuggestItem(props) {
    const { image, imageAlt, title, description, price } = props;
  
    return (
      <div>
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    );
  }
  
  export default SuggestItem;
  