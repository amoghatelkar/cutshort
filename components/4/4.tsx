import { FC } from "react";

interface IFourth{
    setStep(step:number):void;
}
export const Fourth:FC<IFourth> = ({setStep}) =>{

    return(<>

<div>Third</div>
<button onClick={() => setStep(4)}>
    Done
</button>
    </>
        
    )
}