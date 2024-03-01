import Case from '@/components/common/Case/Case';
import styles from './BasketCard.module.scss';
import { Book } from '@/lib/slices/books/slices';
import { FC, useCallback, useEffect, useState } from 'react';
import { setBookCount } from '@/lib/slices/basket/slices';
import { useAppDispatch } from '@/lib/hooks';
import cn from 'classnames';
import plusSvg from '@/assets/images/plus.svg';
import minSvg from '@/assets/images/min.svg';
import Image from 'next/image';
import classNames from 'classnames';
interface Props {
    card: Book
}

const BasketCard: FC<Props> = ({card}) => {
    const dispatch = useAppDispatch();

    const [count, setCount] = useState(1);

    const incrementCount = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const decrementCount = useCallback(() => {
        count && setCount(count - 1)
    }, [count])

    useEffect(() => {
        dispatch(setBookCount({id: card.id, count}));
    }, [count]);

    const counter = () => <div className = {styles.counter}>
        <Image onClick = {decrementCount} src = {minSvg} alt = '-' />
        <input className = {styles.countInput} value = {count} onChange = {(e) => {setCount(Number(e.currentTarget.value))}}/>
        <Image onClick = {incrementCount} src = {plusSvg} alt = '+' />
    </div>

    return(
        <tr className = {styles.wrapper}>
            <td className = {cn(styles.block, styles.block1)}>
                <Case isMini data = {card} /> 
            </td>
            <td className = {cn(styles.block, styles.block2)}>
                {counter()}
            </td>
            <td className = {cn(styles.block, styles.block3)}>
                <span className = {styles.price}>
                    {card.saleInfo?.listPrice?.amount}
                    {card.saleInfo?.listPrice?.currencyCode}
                </span>
            </td>
            <td className = {cn(styles.block, styles.block4)}>
                <div>
                    Shipping: delivery
                </div>
            </td>
        </tr>
    )
}

export default BasketCard;