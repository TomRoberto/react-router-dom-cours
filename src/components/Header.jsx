import {
  Link,
  //  useLocation
} from "react-router-dom";

const Header = () => {
  //   const location = useLocation();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link target="_blank" to="/">
              Home
            </Link>
          </li>
          <li>
            <a href="https://www.allocine.fr/">Test</a>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
