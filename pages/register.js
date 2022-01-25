import styles from '../styles/Register.module.css';
import Head from 'next/head';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [updateText, setUpdateText] = useState('');

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: 'wena choro',
        userId: selectedUser,
        updateText,
      }),
    });
    const data = await res.json();
    console.log('the data after the update is: ', data);
  };
  const handleUpdateText = e => {
    setUpdateText(e.target.value);
  };
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Registrar una nueva cuenta to RudraKY</title>
      </Head>
      <div className={styles.loginDiv}>
        <div className={styles.wrapper}>
          {selectedUser && <strong>Selected User's Id: {selectedUser}</strong>}
          {name && `the name is ${name}`}
          <br />
          {updateText && `the update text is ${updateText}`}
          <hr />
          <form onSubmit={registerHandler}>
            <input
              onChange={onNameChange}
              type='text'
              placeholder='Nombre de Usuario'
            />
            <button type='submit'>Submit</button>
          </form>
          {users &&
            users.map(user => (
              <p
                onClick={() => {
                  setSelectedUser(user._id);
                }}
              >{`${user.username}'s ID is: ${user._id}`}</p>
            ))}
          <input
            type='text'
            onChange={handleUpdateText}
            placeholder='Enter text to update'
          />
        </div>
        <button onClick={handleGetUserIds}>Get User IDS</button>
        <button onClick={handleUserUpdate}>Update User</button>
      </div>
    </div>
  );
};

export default Register;
