import ContactInfo from "../../components/ContactInfo";
import NavBar from "../../components/NavBar";
import FlyVisaStaff from "./components/FlyVisaStaff";
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
      <FlyVisaStaff />
    </div>
  );
}

export default Home;
