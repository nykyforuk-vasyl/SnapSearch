import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreFu }) => {
  return (
    <div className={s.loadWrapper}>
      <button className={s.loadButton} onClick={() => loadMoreFu()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
