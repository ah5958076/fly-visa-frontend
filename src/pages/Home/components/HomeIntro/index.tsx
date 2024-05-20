import { faSearch } from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import styles from "./styles.module.css";

function HomeIntro() {
  return (
    <div className={styles.intro_container}>
      <div className={styles.heading}>
        <h1>
          Explore
          <br />
          Your{" "}
          <span className={`primary_clr ${styles.heading_stroke}`}>Travel</span>
        </h1>
        <p>Roam Beyond Boundaries, Your Journey, Your Story</p>
      </div>
      <div className={styles.search_tour}>
        <div className={styles.interactor}>
          <input type="text" placeholder="Where To?" />
          {/* location icon */}
        </div>
        <div className={styles.interactor}>
          <input type="date" placeholder="When to?" />
          {/* watch icon */}
        </div>
        <div className={styles.interactor}>
          <select>
            <option value="-" defaultValue>
              Select Type
            </option>
            <option value="Tour Type 1">Tour Type 1</option>
            <option value="Tour Type 2">Tour Type 2</option>
            <option value="Tour Type 3">Tour Type 3</option>
          </select>
        </div>
        <button className={styles.interactor}>
          <FontAwesomeIcon icon={faSearch} color={"var(--bg)"} />
          Find Now
        </button>
      </div>
    </div>
  );
}

export default HomeIntro;
