import styles from '../../styles/Kriyas.module.css';
import KriyaElementCard from '../../components/KriyaElementCard';
import Link from 'next/link';

const Kriyas = ({ kriyas }) => {
  return (
    <div className={styles.container}>
      <h2>Kriyas</h2>
      <p>Todos los kriyas que han creado compañeros. </p>
      <div className={styles.kriyasDisplay}>
        {kriyas &&
          kriyas.map(kriya => {
            return <KriyaElementCard key={kriya._id} kriya={kriya} />;
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
