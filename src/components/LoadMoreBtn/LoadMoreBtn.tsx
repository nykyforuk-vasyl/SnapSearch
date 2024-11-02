import s from "./LoadMoreBtn.module.css";

type Props = {
  loadMoreFu: () => void;
};

const LoadMoreBtn = ({ loadMoreFu }: Props) => {
  return (
    <div className={s.loadWrapper}>
      <button className={s.loadButton} onClick={() => loadMoreFu()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
