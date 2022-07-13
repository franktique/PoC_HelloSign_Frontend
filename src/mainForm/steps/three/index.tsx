import React, {  Dispatch, SetStateAction } from "react";
import {getAxios} from '../../../api'

const axiosInstance = getAxios();

interface ThreeProps  {
    setStep: Dispatch<SetStateAction<number>>
    setSignUrl: Dispatch<SetStateAction<string>>
    signatureRequest: Object
}

export const Three: React.FC<ThreeProps> = ({setStep, setSignUrl, signatureRequest}) => {
    
    const signHandler = ()=> {
        // @ts-ignore 
        const signatureId = signatureRequest.signatures[0]?.signature_id;
        if(signatureId) { 
            axiosInstance
                .get(`http://localhost:3001/getSignUrl/${signatureId}`)
                .then(({ data }) => {
                        console.log('getSignUrl')
                        console.log(data);
                        setSignUrl(data);
                        setStep(4);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    } 
    // @ts-ignore
    const renderButtons = signatureRequest.signatures.map((signature)=>{
        return  <>   
                    <button onClick={()=> signHandler()}>{`sign for ${signature.signer_name}`}</button>
                </>
    });
    return <>{renderButtons}</>

};