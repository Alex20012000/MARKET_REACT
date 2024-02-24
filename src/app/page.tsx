import styles from './App.module.scss';
import MainPage from '@/components/page/MainPage/MainPage';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}
