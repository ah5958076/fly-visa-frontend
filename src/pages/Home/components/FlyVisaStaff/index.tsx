import { DUMMY_USER_1 } from "../../../../constants/images";
import styles from "./styles.module.css";

function FlyVisaStaff() {
  return (
    <div className={styles.staff_container}>
      <p className={styles.heading}>
        Curios About People Working in Fly Visa
        <span className="primary_clr">Travelers</span>?
      </p>
      <div className={styles.staff_list}>
        <div className={styles.images}>
          <img className={styles.staff_image} src={DUMMY_USER_1} alt="..." />
          <img className={styles.staff_image} src={DUMMY_USER_1} alt="..." />
          <img className={styles.staff_image} src={DUMMY_USER_1} alt="..." />
        </div>
        <div className={styles.staff_names}>
          <div>
            <p>Naveed Aziz</p>
            <p>CEO</p>
          </div>
          <div>
            <p>Naveed Aziz</p>
            <p>CEO</p>
          </div>
          <div>
            <p>Naveed Aziz</p>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlyVisaStaff;
