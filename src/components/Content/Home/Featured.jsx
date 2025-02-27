import { useState, useRef, useEffect } from "react";
import useFetch from "../../../services/useFetch";

function Featured() {
  const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/featured");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const featuredRef = useRef(null);

  function nextSlide() {
    if (!data || data.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  }
  function prevSlide() {
    if (!data || data.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  }
  function slideOver() { setIsPlaying(false); }
  function slideOut() { setIsPlaying(true); }
  function prevNextClick(action) {
    setIsPlaying(false);
    action === "prev" ? prevSlide() : nextSlide();
  }

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, data]);

  useEffect(() => {
    if (featuredRef.current && data.length > 0) {
      const currentSlide = data[currentIndex];
      const product = currentSlide.product || {};
      const imageUrl = product.pictures && product.pictures.length > 0
        ? product.pictures[0]
        : "src/assets/images/default-featured.jpg";

      featuredRef.current.style.backgroundImage = `url(${imageUrl})`;
      featuredRef.current.style.backgroundSize = "cover";
      featuredRef.current.style.backgroundPosition = "center";
    }
  }, [currentIndex, data]);

  if (loading) return <div>Chargement de la présentation en vedette...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data || data.length === 0) return <div>Aucune donnée à afficher</div>;

  const slideData = data[currentIndex];
  const product = slideData.product || {};

  const title = product.title || "Produit vedette";
  const price = product.price ? product.price + " €" : "NC";
  const description = slideData.description || "Une nouveauté à découvrir !";

  return (
    <section
      className="featured relative"
      ref={featuredRef}
      onMouseEnter={slideOver}
      onMouseLeave={slideOut}
    >
      <div className="slide relative flex flex-col justify-center items-center py-10 bg-black/20 text-white min-h-[400px]">
        <div className="text-center max-w-xl">
          <h1 className="text-5xl md:text-7xl my-3">{title}</h1>
          <p className="price text-3xl md:text-5xl text-secondary mb-5">{price}</p>
          <p className="mb-5">{description}</p>
          <p>
            <button className="btn-lg">Commander</button>
          </p>
        </div>

        <button
          onClick={() => prevNextClick("prev")}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-6xl text-white/50 hover:text-secondary transition"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={() => prevNextClick("next")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-6xl text-white/50 hover:text-secondary transition"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Featured;
