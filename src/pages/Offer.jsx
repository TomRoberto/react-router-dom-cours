import { useParams } from "react-router-dom";

const Offer = () => {
  const params = useParams();
  console.log(params);

  return (
    <main>
      <h2>Page de l'offre dont l'id est : {params.id}</h2>
    </main>
  );
};

export default Offer;
