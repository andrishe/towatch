import PropTypes from "prop-types";
import styles from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={styles.conatiner}>
      <img
        alt={tvShow.name}
        className={styles.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={styles.title}>{tvShow.name}</div>
    </div>
  );
}

TVShowListItem.propTypes = {
  tvShow: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
