// import Header from "../components/Header";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <h2>Home page</h2>
        <Link to="/details">Aller sur la page details</Link>
      </main>
    </>
  );
};

export default Home;
