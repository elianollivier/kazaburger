import Testimony from "./Testimonies/Testimony";
import useFetch from "../../../services/useFetch";
import { shuffleArray } from "../../../services/shuffle";

function Testimonies() {
  const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/testimony");

  if (loading) {
    return <div>Chargement des témoignages...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const testimonies = shuffleArray(data, 4);

  return (
    <section className="testimony">
      <h2>Nos clients témoignent</h2>
      <div className="content">
        {testimonies.map((item, index) => {
          return (
            <Testimony
              key={index}
              image={item.image}
              name={item.name}
              rating={item.rating}
              review={item.review}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Testimonies;
