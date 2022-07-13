import React, { useState, Dispatch, SetStateAction } from "react";
import {getAxios} from '../../../api'

const axiosInstance = getAxios();

interface OneProps  {
    setStep: Dispatch<SetStateAction<number>>
    setTemplateData: Dispatch<SetStateAction<number>>
}

export const One: React.FC<OneProps> = ({setStep,setTemplateData }) => {
    const [templateId, setTemplateId] = useState('');

    const nextHandler = ()=> {
        if(templateId!=='') {       
            axiosInstance
                .get(`http://localhost:3001/templates/${templateId}`)
                .then(({ data }) => {
                        console.log('template')
                        console.log(data);
                        setTemplateData(data);
                        setStep(2);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    } 

    return <>
            <label>Template Id</label>
            <input type='text' onChange={(e)=>setTemplateId(e.target.value)}/>
            <button onClick={()=> nextHandler()}>Next</button>
            </>

};