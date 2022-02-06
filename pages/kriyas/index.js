import styles from '../../styles/Kriyas.module.css';
import KriyaElementDisplay from '../../components/KriyaElementDisplay';
import Link from 'next/link';

const Kriyas = ({ kriyas }) => {
  return (
    <div className={styles.container}>
      <div className={styles.kriyasDisplay}>
        {kriyas &&
          kriyas.map(kriya => {
            return <KriyaElementDisplay key={kriya._id} kriya={kriya} />;
          })}
      </div>

      <div className={styles.newKriyaBtn}>
        <Link href='/kriyas/nuevo'>
          <a>Agregar Nuevo Kriya</a>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/kriyas`);
  let data = await response.json();

  return {
    props: {
      kriyas: data,
    },
  };
}

export default Kriyas;
