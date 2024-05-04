import ContactInfo from "../../components/ContactInfo";
import NavBar from "../../components/NavBar";
import HomeIntro from "./components/HomeIntro";
import WhyTravel from "./components/WhyTravel";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.parentContainer}>
      <ContactInfo />
      <NavBar />

      <HomeIntro />
      <WhyTravel />
    </div>
  );
}

export default Home;
