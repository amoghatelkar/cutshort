import { Button } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Stepper.module.scss';
interface IStepper {
    selectedStep: number;
    steps: number[];
}
export const Stepper: FC<IStepper> = ({ selectedStep, steps }) => {

    return (
        <>
            <div className={styles.stepper}>
                {steps.map((step, index) =>
                    <div key={index} className={styles.step} style={steps.length - 1 === index ? { display: 'contents' } : {}}>
                        <div className={index <= selectedStep ? styles.platform : styles.platformInAvtive} style={steps.length - 1 === index ? { width: '17%' } : {}} >
                            <label>{step}</label>
                        </div>
                        {steps.length - 1 === index ? undefined : <div className={styles.connecter}>
                            <hr />
                        </div>}

                    </div>
                )}
            </div>
            {/* <Button onClick={() => setCurrentStep(currentStep+1)}>
                Next
        </Button>
        <Button onClick={() => setCurrentStep(currentStep-1)}>
                Previous
        </Button> */}
        </>
    )
}