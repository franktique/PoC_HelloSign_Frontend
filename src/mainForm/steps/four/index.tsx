import React, { useEffect, Dispatch, SetStateAction } from "react";
import HelloSign from 'hellosign-embedded';
import {getEnv} from "../../../utils/getEnv";

const HELLOSIGN_CLIENT_ID = getEnv("REACT_APP_HELLOSIGN_CLIENT_ID");
const client = new HelloSign();


interface FourProps  {
    setStep: Dispatch<SetStateAction<number>>
    signUrl:string
}

export const Four: React.FC<FourProps> = ({setStep, signUrl}) => {
    useEffect(() => {

    client.open(signUrl, {
        clientId: HELLOSIGN_CLIENT_ID,
        skipDomainVerification: true
        });

    }, [])
    

    client.on('sign', (data) => {
        console.log('The document has been signed!');
        console.log('Signature ID: ' + data.signatureId);

        
    });

    client.on('finish', () => {
        console.log('the user has finished the embedded signature request flow!');
        setStep(5)
    });

    return <div>main form</div>

};