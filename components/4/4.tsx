import { FC } from "react";
import { Button } from '../Button/Button';
import { Box, SvgIcon, SvgIconProps } from "@mui/material";
import { IPerson } from '../../pages/index';
import styles from './4.module.scss';
import { CONSTANTS } from "../../utils/constant";
import { TickIcon } from "../SvgIcons/SvgIcons";

interface IFourth {
    setStep(step: number): void;
    setPerson(person: IPerson): void;
    person: IPerson;
}

export const Fourth: FC<IFourth> = ({ setStep, setPerson, person }) => {

    return (
        <>
            <Box className={styles.header}>
                <TickIcon htmlColor="#5A4AD1" sx={{ fontSize: 100 }} />
                <h2 className={styles.title}> {CONSTANTS.FOUR.TITLE(person.displayName)}</h2>
                <p className={styles.description}>{CONSTANTS.FOUR.DESRIPTION}</p>
            </Box>
            <Box className={styles.body}>
                <div className={styles.submit}>
                    <Button disabled={false} text={CONSTANTS.BUTTON.LAUNCH_EDEN} onClick={() => setStep(3)} />
                </div>
            </Box>
        </>
    )
}