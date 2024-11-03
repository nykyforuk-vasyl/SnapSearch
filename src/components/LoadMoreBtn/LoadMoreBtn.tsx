import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <div className={s.loadWrapper}>
      <button className={s.loadButton} onClick={() => handleClick()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
