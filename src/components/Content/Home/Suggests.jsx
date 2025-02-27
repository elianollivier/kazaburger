import { shuffleArray } from "../../../services/shuffle";
import useFetch from "../../../services/useFetch";
import SuggestItem from "./Suggests/SuggestItem";

function Suggests() {
  const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/suggest");

  if (loading) return <div>Chargement des suggestions...</div>;
  if (error) return <div>Erreur : {error}</div>;

  const suggestions = shuffleArray(data, 3);

  return (
    <section className="suggests">
      <h2>Nos suggestions</h2>
      <div className="content">
        {suggestions.map((item, index) => {
          const product = item.product || {};
          const imageUrl = product.pictures && product.pictures.length > 0
            ? product.pictures[0]
            : "src/assets/images/default.png";

          return (
            <SuggestItem
              key={index}
              image={imageUrl}
              imageAlt={product.title || "Sans titre"}
              title={product.title || "Sans titre"}
              description={item.description || "Pas de description"}
              price={product.price ? product.price + " €" : "NC"}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Suggests;
