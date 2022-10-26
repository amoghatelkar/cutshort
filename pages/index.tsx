import { Container, Box } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Stepper } from '../components';
import styles from '../styles/Home.module.scss';
import { First } from '../components/1/1';
import { Fourth } from '../components/4/4';
import { Second } from '../components/2/2';
import { Third } from '../components/3/3';
import { CONSTANTS } from '../utils/constant';
import { EdenIcon } from '../components/SvgIcons/SvgIcons';

export interface IPerson {
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceURL: string;
  useType: string;
}

const Home: NextPage = () => {

  const [selectedStep, setStep] = useState<number>(0);
  const intialPerson: IPerson = { fullName: '', displayName: '', workspaceName: '', workspaceURL: '', useType: 'myself' };
  const [person, setPerson] = useState<IPerson>(intialPerson);
  const steps = [1, 2, 3, 4];

  const Form = () => {
    switch (selectedStep) {
      case 0: return (
        <First setStep={setStep} setPerson={setPerson} person={person} />
      )
      case 1: return (
        <Second setStep={setStep} setPerson={setPerson} person={person} />
      )
      case 2: return (
        <Third setStep={setStep} setPerson={setPerson} person={person} />
      )
      case 3: return (
        <Fourth setStep={setStep} setPerson={setPerson} person={person} />
      )
      default: return (
        <>
          Error
        </>
      )
    }
  }

  return (
    <div className={styles.main}>
      <Container maxWidth={'sm'}>
        <Box className={styles.header}>
          <span className={styles.logo}>
            <EdenIcon htmlColor="#5A4AD1" sx={{ fontSize: 50, height: 'auto' }} />
            <h2 className={styles.title}>{CONSTANTS.EDEN}</h2>
          </span>
        </Box>
        <div className={styles.stepperDiv}>
          <Box className={styles.stepperBox}>
            <Stepper selectedStep={selectedStep} steps={steps} />
          </Box>
        </div>
        <Box className={styles.form} >
          <Form />
        </Box>
      </Container>
    </div>
  )
}

export default Home
