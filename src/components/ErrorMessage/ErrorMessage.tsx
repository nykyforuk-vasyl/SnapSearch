import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.errorWrapper}>
      <p className={s.errorMessage}>Something wrong! Try again...</p>
    </div>
  );
};

export default ErrorMessage;
