import React, { Dispatch, SetStateAction } from "react";
import {getAxios} from '../../../api'

const axiosInstance = getAxios();

interface FiveProps  {
    setStep: Dispatch<SetStateAction<number>>
    signatureRequest: Object
}

export const Five: React.FC<FiveProps> = ({setStep, signatureRequest}) => {
    
    const downloadHandler = ()=> {
        // @ts-ignore 
        const signatureRequestId = signatureRequest.signature_request_id;
        if(signatureRequestId) { 
            axiosInstance
                .get(`http://localhost:3001/getFileBySignatureRequestId/${signatureRequestId}`,
                    {
                    headers: {
                        'Content-Type': 'application/pdf',
                    },
                    responseType: 'blob',
                })
                // @ts-ignore 
                .then(({ data }) => {
                    // Create blob link to download
                    const url = window.URL.createObjectURL(
                    new Blob([data]),
                    );
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute(
                    'download',
                    `HelloSignTest.pdf`,
                    );

                    // Append to html link element page
                    document.body.appendChild(link);

                    // Start download
                    link.click();

                    // Clean up and remove the link
                    link.parentNode!.removeChild(link);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    } 

    return <><button onClick={()=> downloadHandler()}>{'Download Document'}</button></>

};