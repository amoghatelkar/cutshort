import { Box } from "@mui/material";
import { FC, useState } from "react";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { IPerson } from '../../pages/index';
import styles from './1.module.scss';
import { CONSTANTS } from "../../utils/constant";

interface IFirst {
    setStep(step: number): void;
    setPerson(person: IPerson): void;
    person: IPerson;
}

export const First: FC<IFirst> = ({ setStep, setPerson, person }) => {

    const [fullName, setFullName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const onInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name === CONSTANTS.ONE.INPUT.FULLNAME.NAME) {
            setFullName(value);
        } else {
            setDisplayName(value);
        }
    }

    const onSubmit = () => {
        setPerson({ ...person, fullName: fullName, displayName: displayName });
        setStep(1);
    }

    return (
        <>
            <Box className={styles.header} >
                <h2 className={styles.title}> {CONSTANTS.ONE.TITLE}</h2>
                <p className={styles.description}>{CONSTANTS.ONE.DESRIPTION}</p>
            </Box>
            <Box className={styles.body}>
                <div className={styles.fullName}>
                    <Input placeholder={CONSTANTS.ONE.INPUT.FULLNAME.PLACEHOLDER} label={CONSTANTS.ONE.INPUT.FULLNAME.LABEL} name={CONSTANTS.ONE.INPUT.FULLNAME.NAME} onChange={(e) => onInputChange(e)} />
                </div>
                <div className={styles.displayName}>
                    <Input placeholder={CONSTANTS.ONE.INPUT.DISPLAYNAME.PLACEHOLDER} label={CONSTANTS.ONE.INPUT.DISPLAYNAME.LABEL} name={CONSTANTS.ONE.INPUT.DISPLAYNAME.NAME} onChange={(e) => onInputChange(e)} />
                </div>
                <div className={styles.submit}>
                    <Button text={CONSTANTS.BUTTON.CREATE_WORKSPACE} onClick={onSubmit} />
                </div>
            </Box>
        </>
    )
}