import { Box } from "@mui/material";
import { FC } from "react";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

interface IFirst {
    setStep(step: number): void;
}
export const First: FC<IFirst> = ({ setStep }) => {

    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '40px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Inter', fontWeight: 'bolder' }}> Welcome! First things first...</h2>
                <p style={{ color: 'grey', fontFamily: 'Inter', fontWeight: 'bolder', marginBottom: '10px' }}>You can always change them later</p>
            </Box>
            <Box style={{ padding: '0 20%' }}>
                <div style={{ paddingTop: '5px' }}>
                    <Input placeholder="Steve Jobs" label="Full Name" />
                </div>
                <div style={{ paddingTop: '5px' }}>
                    <Input placeholder="Steve" label="Display Name" />
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <Button text={'Create Worksapce'} onClick={() => setStep(1)} />
                </div>


            </Box>
        </>
    )
}