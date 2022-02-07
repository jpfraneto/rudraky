import styles from './styles.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <h2>Cargando</h2>
      <h4>
        Alineate con la verdad. Si haces lo correcto para tu propio corazón,
        nunca errarás; tampoco para los demás. No lo dudes. <br />
        <span>
          {' '}
          <em>Mooji</em>
        </span>
      </h4>
    </div>
  );
};

export default Loader;
