import styles from "./styles.module.css";

function ContactInfo() {
  return (
    <div className={styles.container}>
      <div>
        {/* headset icon */}
        <a href="tel: +923004605120">+92 300 4605120</a>
      </div>
      <div>
        {/* location icon */}
        <a href="">Islamabad Pakistan</a>
      </div>
      <div>
        {/* mail icon */}
        <a href="mailto: naveedaziz2010@gmail.com">naveedaziz2010@gmail.com</a>
      </div>
      <div>
        <a href="https://facebook.com">f</a>
        <a href="https://instagram.com">I</a>
        <a href="https://web.whatsapp.com">W</a>
        {/* facebook icon */}
        {/* Instagram icon */}
        {/* whatsapp icon icon */}
      </div>
    </div>
  );
}

export default ContactInfo;
