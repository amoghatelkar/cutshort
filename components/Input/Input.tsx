import { FC } from 'react';
import styles from './Input.module.scss';
interface IInput {
    label?: string;
    placeholder?: string;
    onChange?(): void;
    value?: string;
    prefix?: string;
}
export const Input: FC<IInput> = ({ label, placeholder, onChange, value, prefix }) => {
    return (
        <div className={styles.input}>
            <label className={styles.label}>{label}</label>
            {
                prefix ? <div className={styles.prefix}><p>{prefix}</p>
                    <input className={styles.inputField} placeholder={placeholder} onChange={onChange}>{value}</input>
                </div> : <input className={styles.inputField} placeholder={placeholder} onChange={onChange}>{value}</input>
            }

        </div>
    )
}