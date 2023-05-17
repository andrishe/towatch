import styles from "./style.module.css";
import PropTypes from "prop-types";

export function Logo({ image, title, subTitles }) {
  return (
    <>
      <div className={styles.container}>
        <img src={image} className={styles.img} />
        <span className={styles.title}>{title}</span>
      </div>
      <span className={styles.subtitle}>{subTitles}</span>
    </>
  );
}

Logo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitles: PropTypes.string,
};
