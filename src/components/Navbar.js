import World from "../images/world-icon.png";

const Navbar = function () {
  return (
    <nav className="journal">
      <img src={World} alt="" />
      <p className="journal-text">my travel journal.</p>
    </nav>
  );
};

export default Navbar;
