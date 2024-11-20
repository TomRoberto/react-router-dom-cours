import { Link } from "react-router-dom";

const Button = ({ to }) => {
  return (
    <button>
      <Link to={to}></Link>
    </button>
  );
};

export default Button;
