import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import PropTypes from "prop-types";
import styles from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={styles.title}>You may also like:</div>
      <div className={styles.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={styles.tv_show_list_item}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

TVShowList.propTypes = {
  tvShowList: PropTypes.array,
  onClickItem: PropTypes.func.isRequired,
};
