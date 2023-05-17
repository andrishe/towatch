import PropTypes from "prop-types";
import styles from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={styles.title}>{tvShow.name}</div>

      <div className={styles.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={styles.rating}>{rating}</div>
      </div>

      <div className={styles.overview}>{tvShow.overview}</div>
    </div>
  );
}

TVShowDetail.propTypes = {
  tvShow: PropTypes.object,
};
