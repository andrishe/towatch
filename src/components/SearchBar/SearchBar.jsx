import styles from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import PropTypes from "prop-types";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() != "") {
      console.log(e.target.value);
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={styles.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a tv show you may like"
        className={styles.input}
      />
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
