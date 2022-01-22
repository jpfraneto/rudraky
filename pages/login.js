import styles from '../styles/Login.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const router = useRouter();
  const handleOnChangeEmail = e => {
    setUserMsg('');
    setEmail(e.target.value);
  };
  const handleLoginWithEmail = async e => {
    e.preventDefault();
    if (email.includes('@')) {
      if (email === 'jpfraneto@gmail.com') {
        try {
          const didToken = await magic.auth.loginWithMagicLink({ email });
          console.log('tje did token is: ', didToken);
          if (didToken) {
            router.push('/');
          }
        } catch (err) {
          console.error('Something went wrong logging in', error);
        }
      } else {
        setUserMsg('Ocurrió un error con ese email');
      }
    } else {
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
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
