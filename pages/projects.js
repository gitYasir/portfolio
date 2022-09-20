import NavBar from "../Components/NavBar/Navbar";
import Projects from "../Components/Projects/Projects";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import css from "../Styles/index.module.scss";
import { Spacer } from "@nextui-org/react";
import Space from "../Components/Space/Space";

function projects() {
  return (
    <div className={css.main}>
      <NavBar />
      <Space />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default projects;
