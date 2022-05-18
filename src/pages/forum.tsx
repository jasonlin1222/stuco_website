import Displayforum from '@/components/display-forum';
import { useState, useEffect } from 'react';
import Page from '@/components/page';
import styles from '../styles/Home.module.css';
import { readForum } from './api';

export default function Forum() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readForum();
      setResponse(result.data);
    };
    fetchData();
  }, []);
  return (
    <Page>
      <div className={styles.container}>
        <Displayforum response={response} />
      </div>
    </Page>
  );
}
