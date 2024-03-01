import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import styles from './LoginPopup.module.scss'
import { logOut, toAuthorization } from '@/lib/slices/auth/slices';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import getUser from '@/lib/slices/auth/selectors/getUser/index'
import { logOutAction } from '@/lib/slices/auth/actions/logOutAction';

export default function LoginPopup() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUser)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogout = () => {
        dispatch(logOutAction());
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!email || !password) {
            return;
        }
        console.log(password, email , 'login');
        dispatch(toAuthorization({login: email, password}))
    };

    return (
        <div className={styles.popup}>
            {user?.token ? (
                <div className={styles.logged}>
                    <p className={styles.title}>Hello!</p>
                    <Link href='/profile' className={styles.profile} aria-label="Open your prifile"> 
                        View profile
                    </Link>
                    <button className={styles.button} onClick={handleLogout} aria-label="Click to log out">Log out</button>
                </div>
            ) : (
                <>
                    <p className={styles.title}>Log In</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.wrapper}>
                            <label htmlFor="email">Email</label>
                            <input 
                                className={styles.input}
                                placeholder={"Email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Input your email"
                            />
                        </div>
                        <div className={styles.wrapper}>
                            <label htmlFor="password">Password</label>
                            <input 
                                className={styles.input} 
                                type="password" 
                                placeholder={"Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Input your password"
                            />
                        </div>
                        <button className={styles.button} type="submit" aria-label="Click to log in">Log In</button>
                    </form>
                </>
            )}
        </div>
    );
}