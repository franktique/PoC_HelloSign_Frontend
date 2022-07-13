import React, { Dispatch, SetStateAction } from "react";


interface SixProps  {
    setStep: Dispatch<SetStateAction<number>>
}

export const Six: React.FC<SixProps> = ({setStep}) => {
    

    return <>
          <button onClick={()=> setStep(1)}>{'File succesfully downloaded. click to send another signing request'}</button>
          </>

};