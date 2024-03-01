'use client'

import { useSelector } from 'react-redux';
import styles from './BasketPage.module.scss';
import getListBasket from '@/lib/slices/basket/selector/getListBasket';
import BasketCard from './BasketCard/BasketCard';
import { useAppSelector } from '@/lib/hooks';
import getAmountBasket from '@/lib/slices/basket/selector/getAmountBasket';
import Button from '@/components/common/Button/Button';

const BasketPage = () => {
    const amount = useAppSelector(getAmountBasket);

    const list = useAppSelector(getListBasket);
    console.log(list, 'list');
    
    return <>
        <section className = {styles.content}>
            <table className = {styles.contentTable}>
                <thead>
                    <tr className = {styles.titleRow}>
                        <th className = {styles.title} scope="col">ITEM</th>
                        <th className = {styles.title} scope="col">QUANTITY</th>
                        <th className = {styles.title} scope="col">PRICE</th>
                        <th className = {styles.title} scope="col">DELIVERY</th>
                    </tr>
                </thead>
                <tbody>
                    {list?.map((basketBook) => <BasketCard card = {basketBook.book} />)}
                </tbody>
            </table>
            <h2 className = {styles.price}>TOTAL PRICE: {amount}RUB</h2>
            <div className = {styles.checkout}>
                <Button>CHECKOUT</Button>
            </div>
        </section>
    </>
};

export default BasketPage;