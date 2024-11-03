import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  loadMoreFu: () => void;
};

const LoadMoreBtn = ({ loadMoreFu }: LoadMoreBtnProps) => {
  return (
    <div className={s.loadWrapper}>
      <button className={s.loadButton} onClick={() => loadMoreFu()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
