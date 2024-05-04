import { useState } from "react";
import styles from "./styles.module.css";

function NavBar() {
  const [navIndex, setNavIndex] = useState(0);

  return (
    <div className={styles.navbar}>
      <div className={styles.brand_name}>
        <p>
          Fly Visa <span className="primary_clr">Travelers</span>
        </p>
        <p>Discover Wonder Thrives</p>
      </div>
      <div className={styles.menus}>
        <a onClick={()=>{setNavIndex(0)}} href="#" className={`${navIndex === 0 ? styles.active : ""}`}>
          Home
        </a>
        <a onClick={()=>{setNavIndex(1)}} href="#" className={`${navIndex === 1 ? styles.active : ""}`}>
          Destination
        </a>
        <a onClick={()=>{setNavIndex(2)}} href="#" className={`${navIndex === 2 ? styles.active : ""}`}>
          Tour
        </a>
        <a onClick={()=>{setNavIndex(3)}} href="#" className={`${navIndex === 3 ? styles.active : ""}`}>
          Contact
        </a>
      </div>

      <button className={styles.apply_visa}>Apply Visa</button>
    </div>
  );
}

export default NavBar;
