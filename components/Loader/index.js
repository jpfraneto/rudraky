import styles from './styles.module.css';
import { quotes } from '../../lib/quotes';

const Loader = () => {
  const randomQuote = quotes[Math.floor(quotes.length * Math.random())];
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <div className={styles.quoteContainer}>
        <h3>{randomQuote.quote}</h3>
        <h4>
          <em>{randomQuote.author}</em>
        </h4>
      </div>
    </div>
  );
};

export default Loader;
