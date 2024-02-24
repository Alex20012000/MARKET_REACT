import React, { FC, MouseEvent, ReactNode } from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';

interface Props {
    className?: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    children?: string | string[] | ReactNode,
    disabled?: boolean,
};

const Button: FC<Props> = ({
    className,
    onClick,
    children,
    disabled,
}) => {
    return (
        <button  
            disabled = {disabled} 
            className = {cn(styles.button, className)}
            onClick = {(e) => {onClick && onClick(e)}}
        >
            {children}
        </button>
    );
};

export default Button;
