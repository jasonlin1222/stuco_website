import Page from '@/components/page';
import Uploadforum from '@/components/upload-forum';
import styles from '../styles/Home.module.css';

export default function Forum() {
  return (
    <Page>
      <div className={styles.container}>
        <Uploadforum />
      </div>
    </Page>
  );
}
