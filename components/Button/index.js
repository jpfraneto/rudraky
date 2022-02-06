import styles from './styles.module.css';

const Button = ({ actionOnClick, text }) => {
  return (
    <button className={styles.btnStyle} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
