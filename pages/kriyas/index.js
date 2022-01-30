import styles from '../../styles/Kriyas.module.css';
import KriyaElementDisplay from '../../components/KriyaElementDisplay';

const Kriyas = ({ kriyas }) => {
  return (
    <div className={styles.container}>
      {kriyas && kriyas.map(kriya => <KriyaElementDisplay kriya={kriya} />)}
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
