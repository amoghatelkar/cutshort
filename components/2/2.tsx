import { Box } from "@mui/material";
import { FC } from "react";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

interface ISecond{
    setStep(step:number):void;
}
export const Second:FC<ISecond> = ({setStep}) =>{

    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '40px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Inter', fontWeight: 'bolder', margin:'5px 0'}}>{"Let's set up a home for all your work"}</h2>
                <p style={{ color: 'grey', fontFamily: 'Inter', fontWeight: 'bolder', margin: '10px 0 20px', fontSize:'smaller' }}>{"You can always create another workspace later."}</p>
            </Box>
            <Box style={{ padding: '0 20%' }}>
                <div style={{ paddingTop: '5px' }}>
                    <Input placeholder="Eden" label="Workspace Name" />
                </div>
                <div style={{ paddingTop: '5px' }}>
                    <Input placeholder="Example" label="Workspace URL(optional)" prefix={'www.eden.com/'} />
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <Button text={'Create Worksapce'} onClick={() => setStep(2)} />
                </div>


            </Box>
        </>
    )
}