import styles from './Basket.module.scss';

export default function Basket() {
  return (
    <main className = {styles.main}>
      <h1 className = {styles.title}>SHOPPING CART</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">ITEM</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">PRICE</th>
            <th scope="col">DELIVERY</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </main>
  );
}
