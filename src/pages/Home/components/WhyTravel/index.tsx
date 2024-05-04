import { INTRO_PIC } from "../../../../constants/images";
import styles from "./styles.module.css";

function WhyTravel() {
  return (
    <div className={styles.whyTravel_container}>
      <p>
        Fly Visa <span className="primary_clr">Travelers</span> Special
      </p>
      <p>
        Why You Should <span className="primary_clr">Travel</span> With Us?
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={INTRO_PIC} alt="..." />
          <div className={styles.card_body}>
            <img src={INTRO_PIC} alt="..." />
            <p className="primary_clr">2000+</p>
            <p>WorldWide guide</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={INTRO_PIC} alt="..." />
          <div className={styles.card_body}>
            <img src={INTRO_PIC} alt="..." />
            <p className="primary_clr">100%</p>
            <p>Trusted Tour Agency</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={INTRO_PIC} alt="..." />
          <div className={styles.card_body}>
            <img src={INTRO_PIC} alt="..." />
            <p className="primary_clr">100%</p>
            <p>Trusted Tour Agency</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={INTRO_PIC} alt="..." />
          <div className={styles.card_body}>
            <img src={INTRO_PIC} alt="..." />
            <p className="primary_clr">98%</p>
            <p>Of Our Customers are Happy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTravel;
