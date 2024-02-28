import Case from '@/components/common/Case/Case';
import styles from './BasketCard.module.scss';
import { Book } from '@/lib/slices/books/slices';
import { FC, useCallback, useEffect, useState } from 'react';
import { setBookCount } from '@/lib/slices/basket/slices';
import { useAppDispatch } from '@/lib/hooks';

interface Props {
    card: Book
}

const BasketCard: FC<Props> = ({card}) => {
    const dispatch = useAppDispatch();

    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(setBookCount({id: card.id, count}));
    }, [count]);

    const counter = () => <input value = {count} onChange = {(e) => {setCount(Number(e.currentTarget.value))}}/>;

    return(
        <tr className = {styles.wrapper}>
            <td>
                <Case data = {card} /> 
            </td>
            <td>
                {counter()}
            </td>
            <td>
                <span className = {styles.price}>
                    {card.saleInfo?.listPrice?.amount}
                    {card.saleInfo?.listPrice?.currencyCode}
                </span>
            </td>
            <td>
                <div>
                    Shipping: delivery
                </div>
            </td>
        </tr>
    )
}

export default BasketCard;