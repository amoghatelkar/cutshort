import {FC} from 'react';
import styles from './Button.module.scss'
interface IButton{
    onClick():void;
    text:string;
}
export const Button:FC<IButton> = ({onClick,text}) => {

    return(
        <button className={styles.button} style={{background:'#5A4AD1',color:'white',width:'100%'}} onClick={onClick} >{text}</button>
    )
}