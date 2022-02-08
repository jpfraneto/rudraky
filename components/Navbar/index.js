import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const handleDropdown = e => {
    e.preventDefault();
    if (username) {
      setShowDropdown(!showDropdown);
    } else {
      router.push('/login');
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.leftNav}>
        <Link href='/'>
          <a>Rudra KY</a>
        </Link>
      </div>
      <div className={styles.rightNav}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/kriyas'>
              <a>Kriyas</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/recordings'>
              <a>Grabaciones</a>
            </Link>
          </li>
          {/* <li>
            <div className={styles.navContainer}>
              <p className={styles.usernameBtn} onClick={handleDropdown}>
                {username ? (
                  <span className={styles.username}>
                    {username}{' '}
                    <Image
                      src='/icons/expand.svg'
                      width='24px'
                      height='24px'
                      alt='username picture'
                    />
                  </span>
                ) : (
                  <span>Iniciar Sesión</span>
                )}
              </p>
              {showDropdown && (
                <div className={styles.navDropdownWrapper}>
                  <ul className={styles.navDropdown}>
                    <li>
                      <Link href='/dashboard'>
                        <a>Mi Cuenta</a>
                      </Link>
                    </li>
                    <li>
                      <a>Cerrar Sesion</a>
                    </li>
                  </ul>
                  <div className={styles.lineWrapper}></div>
                </div>
              )}
            </div> 
          </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
