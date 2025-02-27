import useFetch from "../../../services/useFetch";
import { shuffleArray } from "../../../services/shuffle";
import Testimony from "./Testimonies/Testimony";

function Testimonies() {
  const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/testimony");

  if (loading) return <div>Chargement des témoignages...</div>;
  if (error) return <div>Erreur : {error}</div>;

  const testimonies = shuffleArray(data, 4);

  return (
    <section className="testimony">
      <h2>Nos clients témoignent</h2>
      <div className="content">
        {testimonies.map((item, index) => {
          const name = item.user || "Anonyme";
          const rating = item.rating ?? 0;
          const review = item.review || "Pas de commentaire";

          const image =
            item.product && item.product.pictures && item.product.pictures.length > 0
              ? item.product.pictures[0]
              : "src/assets/images/avatar1.jpg";

          return (
            <Testimony
              key={index}
              image={image}
              name={name}
              rating={rating}
              review={review}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Testimonies;
