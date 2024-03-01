'use client'
import React from 'react';

import Image from 'next/image';
import cn from 'classnames';

import Logo from '@/assets/images/logo.svg';
import Account from '@/assets/images/account.svg';
import Search from '@/assets/images/search.svg';
import Cart from '@/assets/images/cart.svg';

import styles from './Header.module.scss';
import useLoginPopupToggle, { useAppSelector } from '@/lib/hooks';
import getListBasket from '@/lib/slices/basket/selector/getListBasket';
import Link from 'next/link';
import LoginPopup from './PopUpLog/LoginPopup';


const Header = () => {
    const [isLoginPopupOpen, toggleLoginPopup] = useLoginPopupToggle();
    const basketList = useAppSelector(getListBasket);
    return (
        <header className = {styles.header}>
            <div className = {styles.container}>
                <div className = {styles.header__wrapper}>
                    <Link href = '/'>
                        <Image src = {Logo} alt = 'Logo Bookshop' />
                    </Link>
                    <nav className = {styles.header__nav}>
                        <div className = {styles.header__list}>
                            <Link href = '/' className = {styles.header__nav__link_active}>
                                books
                            </Link>
                            <Link href = '#' className = {styles.header__nav__link}>
                                audiobooks
                            </Link>
                            <Link href = '#' className = {styles.header__nav__link}>
                                Stationery & gifts
                            </Link>
                            <Link href = '#' className = {styles.header__nav__link}>
                                blog
                            </Link>
                        </div>
                    </nav>
                    <ul className = {styles.header__actions}>
                        <li className = {styles.account}>
                            <button onClick = {toggleLoginPopup} className = {styles.header__actions__btn}>
                                <Image src = {Account} alt = 'account' />
                            </button>
                            {isLoginPopupOpen && <LoginPopup />}
                        </li>
                        <li>
                            <Link href = {'/basket'} className = {cn(styles.header__actions__btn, styles.header__actions__btn__cart)}>
                                <Image src = {Cart} alt = 'cart' />
                                <span className = {styles.header__cart__amount}>{basketList?.length || 0}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
