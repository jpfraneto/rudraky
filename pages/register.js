import styles from '../styles/Register.module.css';
import Head from 'next/head';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const onNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const registerHandler = async e => {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username: name }),
    });
    const data = await res.json();
    console.log('the data is: ', data);
  };
  const handleGetUserIds = async e => {
    e.preventDefault();
    const res = await fetch('/api/users');
    const usersData = await res.json();
    if (usersData) {
      setUsers(usersData);
    }
  };
  const handleUserUpdate = async () => {
    const res = await fetch('/api/users', {
      method: 'PUT',
      body: 'wena choro',
    });
    const data = await req.json();
    console.log('the data after the update is: ', data);
  };
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Registrar una nueva cuenta to RudraKY</title>
      </Head>
      <div className={styles.loginDiv}>
        {name && `the name is ${name}`}
        <div className={styles.wrapper}>
          <form onSubmit={registerHandler}>
            <input
              onChange={onNameChange}
              type='text'
              placeholder='Nombre de Usuario'
            />
            <button type='submit'>Submit</button>
          </form>
          {users &&
            users.map(user => <p>{`${user.username}'s ID is: ${user._id}`}</p>)}
        </div>
        <button onClick={handleGetUserIds}>Get User IDS</button>
        <button onClick={handleUserUpdate}>Update User</button>
      </div>
    </div>
  );
};

export default Register;
