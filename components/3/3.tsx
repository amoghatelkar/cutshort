import { FC, useState } from "react";
import React from "react";
import { Button } from '../Button/Button';
import { IPerson } from '../../pages/index';
import { Box, Card, CardContent, Typography } from "@mui/material";
import styles from './3.module.scss';
import { CONSTANTS } from "../../utils/constant";
import { MyselfIcon, TeamIcon } from "../SvgIcons/SvgIcons";

interface IThird {
    setStep(step: number): void;
    setPerson(person: IPerson): void;
    person: IPerson;
}

export const Third: FC<IThird> = ({ setStep, setPerson, person }) => {

    const myself = {
        text: 'Myself',
        description: 'Write better. Think more clearly. Stay organized'
    }

    const team = {
        text: 'Team',
        description: 'Wikis, docs, tasks & projects all in one place'
    }

    const [useType, setUseType] = useState('Myself');

    const onSubmit = () => {
        setPerson({ ...person, useType: useType });
        setStep(3);
    }
    const card = (text: string, description: string) => {
        return (
            <React.Fragment>
                <CardContent>
                    {text === 'Myself' ? <MyselfIcon htmlColor={useType === myself.text ? "#5A4AD1" : '#40434A'} sx={{ fontSize: 40 }} /> : <TeamIcon htmlColor={useType === team.text ? "#5A4AD1" : '#40434A'} sx={{ fontSize: 40 }} />}
                    <Typography variant="h5" style={{ fontFamily: 'Inter', fontSize: 'small', fontWeight: 'bolder' , marginBottom:'2px'}} component="div">
                        {text}
                    </Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Inter', fontSize: 'small', color: '#BDC5D6',fontWeight: 600 }}>
                        {description}
                    </Typography>
                </CardContent>
            </React.Fragment>
        )
    }



    return (
        <>
            <Box className={styles.header}>
                <h2 className={styles.title}> {CONSTANTS.THREE.TITLE}</h2>
                <p className={styles.description}>{}</p>
            </Box>
            <Box 
            className={styles.body}>
                <div className={styles.cards}>
                    <Card className={useType === myself.text ? styles.myselfActive : styles.myself} variant="outlined" onClick={() => setUseType(myself.text)}>{card(myself.text, myself.description)}</Card>
                    <Card className={useType === team.text ? styles.teamActive : styles.team} variant="outlined" onClick={() => setUseType(team.text)}>{card(team.text, team.description)}</Card>
                </div>
                <div className={styles.submit}>
                    <Button disabled={!useType} text={CONSTANTS.BUTTON.CREATE_WORKSPACE} onClick={onSubmit} />
                </div>
            </Box>
        </>
    )
}