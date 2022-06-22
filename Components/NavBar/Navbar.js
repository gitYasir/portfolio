import css from "./NavBar.module.scss";

function Navbar() {
  return (
    <div className={css.navBar}>
      <h4>Home</h4>
      <h4>About Me</h4>
      <h4>Skills</h4>
      <h4>Projects</h4>
      <h4>Contact Me</h4>
    </div>
  );
}

export default Navbar;
