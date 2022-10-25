import { FC } from "react";
import React from "react";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Box, Card, CardActions, CardContent, SvgIcon, SvgIconProps, Typography } from "@mui/material";
interface IThird {
    setStep(step: number): void;
}
export const Third: FC<IThird> = ({ setStep }) => {

    const myself = {
        text:'Myself',
        description:'Write better. Think more clearly. Stay organized'
    }

    const team = {
        text:'Team',
        description:'Wikis, docs, tasks & projects all in one place'
    }

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    function MyselfIcon(props: SvgIconProps) {
        return (
          <SvgIcon {...props}>
              <path d="M7.087 5.212c-1.725 1.725 -1.275 4.087 0.937 5.175 1.725 0.787 3.375 0.187 4.237 -1.65 0.562 -1.2 0.562 -1.387 0 -2.587 -1.087 -2.212 -3.45 -2.662 -5.175 -0.937zm0.225 7.087c-1.425 0.9 -1.95 1.5 -2.25 2.812l-0.262 1.012h4.537c2.512 0 4.537 -0.075 4.537 -0.187 0 -0.975 -1.65 -3.112 -2.775 -3.675 -1.725 -0.825 -2.4 -0.787 -3.787 0.037z"/>
          </SvgIcon>
        );
      }
      function TeamIcon(props: SvgIconProps) {
        return (
          <SvgIcon {...props}>
            <path d="M7.977 4.322c-0.826 1.049 -0.826 1.43 -0.032 2.288s1.939 0.89 2.638 0.127c0.731 -0.794 0.667 -1.811 -0.159 -2.606 -0.922 -0.858 -1.653 -0.794 -2.447 0.191zm-2.86 2.924c-0.381 0.699 0.35 1.748 1.112 1.589 0.858 -0.159 1.271 -1.049 0.794 -1.653 -0.572 -0.667 -1.525 -0.636 -1.907 0.064zm6.419 -0.064c-0.477 1.239 1.208 2.129 1.907 1.017 0.254 -0.381 0.222 -0.667 -0.064 -1.017 -0.54 -0.667 -1.589 -0.636 -1.843 0zm-3.114 1.144c-1.112 0.604 -1.43 1.303 -1.43 3.178V13.347h4.767v-1.78c0 -1.525 -0.127 -1.875 -0.922 -2.701 -1.017 -0.985 -1.43 -1.081 -2.415 -0.54zm-3.432 1.78c-0.318 0.35 -0.54 1.144 -0.54 1.907 0 1.112 0.095 1.335 0.636 1.335 0.572 0 0.636 -0.222 0.636 -1.907 0 -1.049 -0.064 -1.907 -0.095 -1.907 -0.064 0 -0.35 0.254 -0.636 0.572zm7.945 -0.032c-0.127 0.095 -0.222 0.89 -0.222 1.748 0 1.43 0.064 1.525 0.794 1.525 0.699 0 0.794 -0.127 0.794 -1.144 0 -1.653 -0.731 -2.797 -1.367 -2.129z"/>
          </SvgIcon>
        );
      }
    const card = (text:string,description:string) => 
        <React.Fragment>
            <CardContent>
             {text === 'Myself' ? <MyselfIcon color="primary" sx={{ fontSize: 40 }} /> : <TeamIcon color="primary" sx={{ fontSize: 50 }} /> }   
            
                <Typography variant="h5" component="div">
                    {text}
                </Typography>

                <Typography variant="body2">
                   {description}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </React.Fragment>
    

    return (<>

        <Box sx={{ width: '100%', paddingTop: '40px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 'bolder' }}> {"How are you planning to use Eden"}</h2>
            <p style={{ color: 'grey', fontFamily: 'Inter', fontWeight: 'bolder', marginBottom: '10px' }}>{"We'll streamline your setup experience accourdingly"}</p>
        </Box>
        <Box style={{ padding: '0 20%' }}>
            <div style={{ paddingTop: '5px', display: 'flex' }}>
                
                    <Card style={{border:'solid 2px purple',margin:'5px'}} variant="outlined">{card(myself.text,myself.description)}</Card>
                    <Card style={{margin:'5px'}} variant="outlined">{card(team.text,team.description)}</Card>
                
            </div>
            <div style={{ paddingTop: '20px' }}>
                <Button text={'Create Worksapce'} onClick={() => setStep(3)} />
            </div>


        </Box>
    </>

    )
}