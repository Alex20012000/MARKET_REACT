'use client'

import { useSelector } from 'react-redux';
import styles from './BasketPage.module.scss';
import getListBasket from '@/lib/slices/basket/selectors/getListBasket';
import BasketCard from './BasketCard/BasketCard';

const BasketPage = () => {
    const list = useSelector(getListBasket);
    console.log(list, 'list');
    
    return <>
        <section className = {styles.content}>
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
                    {list?.map((basketBook) => <BasketCard card = {basketBook.book} />)}
                </tbody>
            </table>
        </section>
    </>
};

export default BasketPage;