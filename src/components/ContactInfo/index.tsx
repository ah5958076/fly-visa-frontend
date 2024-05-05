import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function ContactInfo() {
  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon color="var(--primary)" icon={faPhone} size="sm" />
        <a href="tel: +923004605120">+92 300 4605120</a>
      </div>
      <div>
        <FontAwesomeIcon
          color="var(--primary)"
          icon={faLocationDot}
          size="lg"
        />
        <a href="">Islamabad Pakistan</a>
      </div>
      <div>
        <FontAwesomeIcon color="var(--primary)" icon={faEnvelope} size="sm" />
        <a href="mailto: naveedaziz2010@gmail.com">naveedaziz2010@gmail.com</a>
      </div>
      <div className={styles.social_link}>
        <a href="https://facebook.com">
          <FontAwesomeIcon color="var(--primary)" icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon
            color="var(--primary)"
            icon={faSquareInstagram}
            size="xl"
          />
        </a>
        <a href="https://web.whatsapp.com">
          <FontAwesomeIcon
            color="var(--primary)"
            icon={faSquareWhatsapp}
            size="xl"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
