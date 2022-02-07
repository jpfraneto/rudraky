import styles from './styles.module.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '../Button';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';

const NewRecordingPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [newRecording, setNewRecording] = useState(null);
  const router = useRouter();

  const handleChange = e => {
    setNewRecording(prevRecording => ({
      ...prevRecording,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNewRecording = async () => {
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newRecording, date: startDate }),
    };
    const response = await fetch('/api/recordings', reqParams);
    const res = await response.json();
    router.push(`/recordings/${res.recordingId}`);
  };
  return (
    <div className={styles.pageContainer}>
      <h3>This is the new recording page</h3>
      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <p>¿Quién dió esta clase?</p>
          <input
            placeholder='¿Quién dió esta clase?'
            type='text'
            onChange={handleChange}
            name='profesor'
          />
        </div>
        <div className={styles.inputContainer}>
          <p>¿Qué kriya trabajó?</p>
          <input
            placeholder='¿Qué kriya trabajó?'
            type='text'
            onChange={handleChange}
            name='kriya'
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Link Zoom</p>
          <input
            placeholder='Link Zoom'
            type='text'
            onChange={handleChange}
            name='zoomLink'
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Password Zoom</p>
          <input
            placeholder='Password Zoom'
            type='text'
            onChange={handleChange}
            name='zoomPassword'
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Fecha de la Clase</p>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </div>
      </div>
      <Button text='Agregar Grabación' actionOnClick={handleNewRecording} />
    </div>
  );
};

export default NewRecordingPage;
