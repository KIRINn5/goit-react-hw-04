import css from "./LoadMoreBtn.module.css";

// eslint-disable-next-line react/prop-types
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
