import styles from '../styles/Login.module.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleOnChangeEmail = e => {
    setUserMsg('');
    setEmail(e.target.value);
  };

  const handleLoginWithEmail = async e => {
    e.preventDefault();
    if (email.includes('@')) {
      if (email === 'jpfraneto@gmail.com') {
        console.log('the email is: ', email);
        try {
          setIsLoading(true);
          const res = await fetch('/api/users');
          const data = await res.json();
          console.log('the data from the server is: ', data);
        } catch (err) {
          setIsLoading(false);
          console.error('Something went wrong logging in', error);
        }
      } else {
        setIsLoading(false);
        setUserMsg('Ocurrió un error con ese email');
      }
    } else {
      setIsLoading(false);
      setUserMsg('Por favor ingresa un email válido!');
    }
  };
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Login to RudraKY</title>
      </Head>
      <div className={styles.loginDiv}>
        <div className={styles.wrapper}>
          <div>
            <h3>Inicia Sesión</h3>
            <input
              onChange={handleOnChangeEmail}
              type='email'
              placeholder='Correo Electrónico'
              className={styles.emailInput}
            />
            <p className={styles.userMsg}>{userMsg}</p>
          </div>

          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? 'Cargando...' : 'Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
