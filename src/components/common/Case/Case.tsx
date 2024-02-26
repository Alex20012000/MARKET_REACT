import { FC, useCallback } from 'react';
import styles from './Case.module.scss';

import cn from 'classnames';
import { Book } from '@/lib/slices/books/slices';
import Image from 'next/image';

import StarActiveSvg from '@/assets/images/star-active.svg'
import StarUnactiveSvg from '@/assets/images/star-unactive.svg'
import Button from '@/components/common/Button/Button';
import { useAppDispatch } from '@/lib/hooks';
import { addBookInBasket } from '@/lib/slices/basket/slices';


interface  Props {
    data: Book
}

const generateStars = (count: number) => Array.from(Array(count).keys())

const myLoader = ({ src }: { src: string }) => {
    return `http://books.google.com/books/content?id=${src}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`
}

const Case: FC<Props> = ({data}) => {
    const dispatch = useAppDispatch();

    const starActive = generateStars(data.volumeInfo?.averageRating || 0)
    const starUnActive = generateStars(data.volumeInfo?.averageRating
        ? 5 - data.volumeInfo?.averageRating 
        : 5);
        
    const addToBasket = useCallback(() => {
        dispatch(addBookInBasket({count: 1, book: data}))
    }, [])    

    return(
        <li className = {styles.li}>
            <div className = {styles.wrapper}>
                <Image 
                    loader = {myLoader} 
                    className = {styles.img} 
                    src = {data.id} 
                    alt = 'book' 
                    width = {212} 
                    height = {300}
                />
                <div className = {styles.info}>
                    <p className = {styles.author}>
                        {data.volumeInfo?.authors?.join(',') || ''}
                    </p>
                    <h3 className = {styles.name}>{data.volumeInfo?.title || 'NO TITLE'}</h3>
                    <div className = {styles.rating}>
                        {starActive
                            ?.map(
                            () => <Image src = {StarActiveSvg} alt = 'Star Active' />
                            )
                            
                        }
                        {starUnActive
                            ?.map(
                            () => <Image src = {StarUnactiveSvg} alt = 'Star Unactive' />
                            )
                            
                        }
                        <span>{
                            data.volumeInfo?.ratingsCount
                                ? `${data.volumeInfo?.ratingsCount} reviews`
                                : ''
                        }</span>
                    </div>
                    <p className = {styles.desc}>
                        {data.volumeInfo?.description?.slice(0, 100) || ''}...
                    </p>
                    { data.saleInfo?.listPrice?.amount
                        ? <strong className = {styles.price}>{data.saleInfo.listPrice.amount} {data.saleInfo.listPrice.currencyCode}</strong>
                        : ''
                    }
                    <Button onClick = {addToBasket} className = {cn(styles.buy, styles.button)}>BUY NOW</Button>
                </div>
            </div>
        </li>
    )
};

export default Case;
