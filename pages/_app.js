import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
