import BasketPage from '@/components/page/BasketPage/BasketPage';
import styles from './Basket.module.scss';

export default function Basket() {
  return (
    <main className = {styles.main}>
      <h1 className = {styles.title}>SHOPPING CART</h1>
      <BasketPage />
      <h2 className = {styles.title}>TOTAL PRICE: $30.58</h2>
    </main>
  );
}
