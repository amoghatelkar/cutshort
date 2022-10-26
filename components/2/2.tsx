import { Box } from "@mui/material";
import { FC, useState } from "react";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { IPerson } from '../../pages/index';
import styles from './2.module.scss';
import { CONSTANTS } from "../../utils/constant";

interface ISecond {
    setStep(step: number): void;
    setPerson(person: IPerson): void;
    person: IPerson;
}

export const Second: FC<ISecond> = ({ setStep, setPerson, person }) => {

    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceURL, setWorkspaceURL] = useState('');

    const onInputChange = (e: any) => {
        const { value, name } = e.target;
        if (name === CONSTANTS.TWO.INPUT.WORKSPACENAME.NAME) {
            setWorkspaceName(value);
        } else {
            setWorkspaceURL(value);
        }
    }

    const onSubmit = () => {
        setPerson({ ...person, workspaceName: workspaceName, workspaceURL: workspaceURL });
        setStep(2);
    }

    return (
        <>
            <Box className={styles.header}>
                <h2 className={styles.title}>{CONSTANTS.TWO.TITLE}</h2>
                <p className={styles.description}>{CONSTANTS.TWO.DESRIPTION}</p>
            </Box>
            <Box className={styles.body}>
                <div className={styles.workspaceName}>
                    <Input required={true} placeholder={CONSTANTS.TWO.INPUT.WORKSPACENAME.PLACEHOLDER} name={CONSTANTS.TWO.INPUT.WORKSPACENAME.NAME} onChange={(e) => onInputChange(e)} label={CONSTANTS.TWO.INPUT.WORKSPACENAME.LABEL} />
                </div>
                <div className={styles.workspaceURL}>
                    <Input required={false} placeholder={CONSTANTS.TWO.INPUT.WORKSPACEURL.PLACEHOLDER} label={CONSTANTS.TWO.INPUT.WORKSPACEURL.LABEL} onChange={(e) => onInputChange(e)} name={CONSTANTS.TWO.INPUT.WORKSPACEURL.NAME} prefix={CONSTANTS.TWO.INPUT.WORKSPACEURL.PREFIX} />
                </div>
                <div className={styles.submit}>
                    <Button disabled={!workspaceName} text={CONSTANTS.BUTTON.CREATE_WORKSPACE} onClick={onSubmit} />
                </div>
            </Box>
        </>
    )
}