import React, { useState,  Dispatch, SetStateAction } from "react";
import {getAxios} from '../../../api'
import {getEnv} from "../../../utils/getEnv";


const HELLOSIGN_CLIENT_ID = getEnv("REACT_APP_HELLOSIGN_CLIENT_ID");
const axiosInstance = getAxios();

interface TwoProps  {
    setStep: Dispatch<SetStateAction<number>>
    setSignatureRequest: Dispatch<SetStateAction<number>>
    templateData:Object
}


export const Two: React.FC<TwoProps> = ({setStep, setSignatureRequest, templateData}) => {
    const [fieldValue, setFieldValue] = useState('')
    // @ts-ignore
    const renderFields = templateData.custom_fields.map((field)=>{
        return  <>   
                    <label>{field.name}</label>
                    <input type='text' onChange={(e)=>setFieldValue(e.target.value)}/>
                </>
    });

    const nextHandler = ()=> {
        if(fieldValue!=='') {   
            // @ts-ignore 
            const templateIDs = [templateData.template_id];
            
            // @ts-ignore
            const customFields = templateData.custom_fields.map((field)=> {return {
                                                   name:field.name, 
                                                   value:fieldValue,
                                                   "editor": "Test role",
                                                   "required": true
                                    }})

            const payload = {
                "template_ids": templateIDs,
                "clientId" : HELLOSIGN_CLIENT_ID,
                "subject": "test template",
                "message": "FRANK TEST.",
                "signers": [
                    {
                    "role": "Test role",
                    "name": "frank",
                    "email_address": "franktique@gmail.com"
                    }
                ],
                "custom_fields": customFields,
                "signing_options": {
                    "draw": true,
                    "type": true,
                    "upload": true,
                    "phone": false,
                    "default_type": "draw"
                },
                "test_mode": true
            }

            axiosInstance
                .post(`http://localhost:3001/embeddedWithTemplate`,payload)
                .then(({ data }) => {
                        console.log('signatureRequest')
                        console.log(data);
                        setSignatureRequest(data);
                        setStep(3);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    } 

    return <>
           {renderFields}
           <button onClick={()=> nextHandler()}>Next</button>
           </>

};