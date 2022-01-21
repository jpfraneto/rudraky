import styles from './styles.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftNav}>
        <Link href='/'>
          <a>Rudra KY</a>
        </Link>
      </div>
      <div className={styles.rightNav}>
        <ul>
          <Link href='/login'>
            <a>Entrar</a>
          </Link>

          <Link href='/historia'>
            <a>Historia</a>
          </Link>

          <Link href='/teoria'>
            <a>Teoría</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
