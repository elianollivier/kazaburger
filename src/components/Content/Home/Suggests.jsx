import { useEffect } from "react";
import SuggestItem from "./Suggests/SuggestItem";
import useFetch from "../../../services/useFetch";
import { shuffleArray } from "../../../services/shuffle";

function Suggests() {
  const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/suggest");

  if (loading) {
    return <div>Chargement des suggestions...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const suggestions = shuffleArray(data, 3);

  return (
    <section className="suggests">
      <h2>Nos suggestions</h2>
      <div className="content">
        {suggestions.map((item, index) => {
          return (
            <SuggestItem
              key={index}
              image={item.image}
              imageAlt={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Suggests;
