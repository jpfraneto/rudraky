import '../styles/globals.css';
import { useRouter, Router } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  useEffect(() => {
    const routeChangeStartHandler = () => setIsRouteChanging(true);

    const routeChangeEndHandler = () => setIsRouteChanging(false);

    router.events.on('routeChangeStart', routeChangeStartHandler);
    router.events.on('routeChangeComplete', routeChangeEndHandler);
    router.events.on('routeChangeError', routeChangeEndHandler);
    return () => {
      router.events.off('routeChangeStart', routeChangeStartHandler);
      router.events.off('routeChangeComplete', routeChangeEndHandler);
      router.events.off('routeChangeError', routeChangeEndHandler);
    };
  }, []);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Rudra KY</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      {isRouteChanging ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
