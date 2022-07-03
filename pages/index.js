import Head from "next/head";
import Splash from "../Components/Splash/Splash";
import Navbar from "../Components/NavBar/Navbar";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import css from "../Styles/index.module.scss";

export default function Home() {
  return (
    <div className={css.main}>
      <Navbar />
      <Splash />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
