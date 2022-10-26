import { FC } from 'react';
import styles from './Input.module.scss';
interface IInput {
    label?: string;
    placeholder?: string;
    onChange(e: any): void;
    value?: string;
    prefix?: string;
    name: string;
    required: boolean;
}
export const Input: FC<IInput> = ({ label, placeholder, onChange, value, prefix, name, required }) => {
    return (
        <div className={styles.input}>
            <div className={styles.labelGroup}>
                <label className={styles.label}>{label}</label>
                {required ? undefined : <p className={styles.optional}>{"(optional)"}</p>}
            </div>
            {
                prefix ? <div className={styles.prefix}><p>{prefix}</p>
                    <input className={styles.inputField} placeholder={placeholder} name={name} onChange={(e) => onChange(e)}>{value}</input>
                </div> : <input className={styles.inputField} placeholder={placeholder} name={name} onChange={(e) => onChange(e)}>{value}</input>
            }

        </div>
    )
}