import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
      );
}
 
export default Nav;