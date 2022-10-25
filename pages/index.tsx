import { Container, Box, SvgIcon, SvgIconProps, Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import Image from 'next/image'
import type { NextPage } from 'next';
import { useState } from 'react';
import { Stepper } from '../components';
import styles from '../styles/Home.module.css'
import { First } from '../components/1/1';
import { Fourth } from '../components/4/4';
import { Second } from '../components/2/2';
import { Third } from '../components/3/3';
import EdenIcon from '../public/vercel.svg'
import EdenSvg from '../components/SvgComponent/EdenSvg';
import { Input } from '@mui/icons-material';
import { ChakraProvider } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [selectedStep, setStep] = useState<number>(0);

  const steps = [0, 1, 2, 3];

  const onStepClick = (step: number) => {
    setStep(step)
  }

  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M5.319 7.485c0 3.231 0.165 4.131 0.941 5.645 1.555 2.945 4.909 4.581 7.405 3.681l1.065 -0.409 -1.023 -1.515c-1.023 -1.515 -1.595 -3.231 -2.045 -5.973 -0.285 -1.841 -1.965 -3.927 -3.765 -4.665C5.4 3.191 5.319 3.273 5.319 7.485zm9.941 0.285c-1.841 0.735 -1.719 4.255 0.165 6.219 0.615 0.615 1.227 1.145 1.391 1.145 0.491 0 2.005 -3.477 2.005 -4.665 0 -0.615 -0.409 -1.515 -1.023 -2.085 -1.065 -1.105 -1.185 -1.145 -2.535 -0.615z" />
      </SvgIcon>
    );
  }

  const Form = () => {

    switch (selectedStep) {
      case 0: return (
        <First setStep={setStep} />
      )
      case 1: return (
        <Second setStep={setStep} />
      )
      case 2: return (
        <Third setStep={setStep} />
      )
      case 3: return (
        <Fourth setStep={setStep} />
      )
      default: return (
        <>
          Error
        </>
      )

    }
  }

  return (
    
    <div style={{paddingTop:'70px'}}>
      <Container maxWidth={'sm'} >
        <Box sx={{ width: '100%' }} style={{ textAlign: 'center' }}>
          <span className={styles.logo}>
            <HomeIcon color="primary" sx={{ fontSize: 70 }} />
            <h2 style={{ fontWeight: 'bolder',fontFamily:'Inter' }}>Eden</h2>
          </span>
        </Box>
        <Box sx={{ width: '100%',paddingTop:'45px' }}>
          <Stepper selectedStep={selectedStep} steps={steps}/>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Form />
        </Box>
      
          
        
      </Container>
    </div>
    
  )
}

export default Home
