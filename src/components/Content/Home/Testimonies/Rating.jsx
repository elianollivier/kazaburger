function Rating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa-solid fa-star text-secondary"></i>);
      } else {
        stars.push(<i key={i} className="fa-solid fa-star"></i>);
      }
    }
  
    return <span>{stars}</span>;
  }
  
  export default Rating;
  