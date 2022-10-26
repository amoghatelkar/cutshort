import { FC, useEffect, useState } from 'react';
import styles from './Button.module.scss'
interface IButton {
    onClick(): void;
    text: string;
    disabled: boolean;
}
export const Button: FC<IButton> = ({ onClick, text, disabled }) => {

    const applyStyle = () => {
        if (disabled) {
            return { background: '#BDC5D6', color: 'white', width: '100%', cursor: 'not-allowed' }
        } else {
            return { background: '#5A4AD1', color: 'white', width: '100%', cursor: 'pointer' }
        }
    }
    
    return (
        <button className={styles.button} style={applyStyle()} onClick={disabled ? undefined : onClick} >{text}</button>
    )
}