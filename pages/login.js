import styles from '../styles/Login.module.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  const handleOnChangeEmail = e => {
    setUserMsg('');
    setEmail(e.target.value);
  };

  const handleLoginWithEmail = async e => {
    e.preventDefault();
    if (email.includes('@')) {
      if (email === 'jpfraneto@gmail.com') {
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({ email });
          if (didToken) {
            router.push('/');
          }
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
