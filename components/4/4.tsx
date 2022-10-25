import { FC } from "react";
import { Button } from '../Button/Button';
import { Box, Card, CardActions, CardContent, SvgIcon, SvgIconProps, Typography } from "@mui/material";

interface IFourth {
    setStep(step: number): void;
}
export const Fourth: FC<IFourth> = ({ setStep }) => {

    function TickIcon(props: SvgIconProps) {
        return (
            <SvgIcon {...props}>
                <path d="M7.862 2.067C5.806 2.654 4.157 4.077 3.208 6.065c-1.243 2.598 -0.633 5.873 1.468 8.019 2.055 2.056 5.444 2.666 7.997 1.423 2.688 -1.333 4.134 -3.592 4.157 -6.506 0 -1.988 -0.678 -3.637 -2.078 -5.083 -1.694 -1.693 -4.608 -2.484 -6.89 -1.852zm3.75 5.76c0.068 0.113 -0.429 0.746 -1.13 1.423l-1.22 1.197 -0.7 -0.7c-0.859 -0.837 -0.7 -1.537 0.158 -0.723l0.565 0.52 0.948 -0.948c0.972 -0.972 1.175 -1.083 1.378 -0.768z"/>
            </SvgIcon>
        );
    }

    return (<>
        <Box sx={{ width: '100%', paddingTop: '40px', textAlign: 'center' }}>
            <TickIcon htmlColor="#5A4AD1" sx={{ fontSize: 100 }} />
            <h2 style={{ fontFamily: 'Inter', fontWeight: 'bolder', margin: '5px 0' }}> {"Congratulations, Eren!"}</h2>
            <p style={{ color: 'grey', fontFamily: 'Inter', fontWeight: 'bolder', margin: '10px 0 20px', fontSize: 'smaller' }}>{"You have completed the onboarding, you can start using the Eden!"}</p>
        </Box>
        <Box style={{ padding: '0 20%' }}>
            <div style={{ paddingTop: '5px', display: 'flex' }}>

            </div>
            <div style={{ paddingTop: '20px' }}>
                <Button text={'Launch Eden'} onClick={() => setStep(3)} />
            </div>
        </Box>
    </>

    )
}