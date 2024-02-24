import React from 'react';

import Image from 'next/image';
import cn from 'classnames';

import Logo from '@/assets/images/logo.svg';
import Account from '@/assets/images/account.svg';
import Search from '@/assets/images/search.svg';
import Cart from '@/assets/images/cart.svg';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className = {styles.header}>
            <div className = {styles.container}>
                <div className = {styles.header__wrapper}>
                    <a href = '/'>
                        <Image src = {Logo} alt = 'Logo Bookshop' />
                    </a>
                    <nav className = {styles.header__nav}>
                        <div className = {styles.header__list}>
                            <a href = '#' className = {styles.header__nav__link_active}>
                                books
                            </a>
                            <a href = '#' className = {styles.header__nav__link}>
                                audiobooks
                            </a>
                            <a href = '#' className = {styles.header__nav__link}>
                                Stationery & gifts
                            </a>
                            <a href = '#' className = {styles.header__nav__link}>
                                blog
                            </a>
                        </div>
                    </nav>
                    <ul className = {styles.header__actions}>
                        <li>
                            <button className = {styles.header__actions__btn}>
                                <Image src = {Account} alt = 'account' />
                            </button>
                        </li>
                        <li>
                            <button className = {styles.header__actions__btn}>
                                <Image src = {Search} alt = 'search' />
                            </button>
                        </li>
                        <li>
                            <button className = {cn(styles.header__actions__btn, styles.header__actions__btn__cart)}>
                                <Image src = {Cart} alt = 'cart' />
                                <span className = {styles.header__cart__amount}>0</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
