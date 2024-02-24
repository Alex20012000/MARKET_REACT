import { useEffect, useState } from 'react';
import Case from './Case/Case';
import styles from './Showcase.module.scss'; 
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getBooksAction } from '@/lib/slices/books/actions/getBooksAction';
import getBooks from '@/lib/slices/books/selectors/getBooks';
import Button from '@/components/common/Button/Button';
import { setPageAction } from '@/lib/slices/books/actions/setPageAction';

const Showcase = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector(getBooks);

    const loadMore = () => {
        dispatch(setPageAction())
    }

    useEffect(() => {
        dispatch(getBooksAction('category'))
    }, [])

    return <div className = {styles.wrapper}>
        <ul className = {styles.list}>
            {books?.map((book) => <Case key = {book.id} data = {book}/>)}
        </ul>
        <div className = {styles.wrapButton}>
            <Button onClick = {loadMore}>Load more</Button>
        </div>
    </div>
};

export default Showcase;
