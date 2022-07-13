import React, { useState } from "react";
import HelloSign from 'hellosign-embedded';
import {One} from './steps/one';
import {Two} from './steps/two';
import {Three} from './steps/three';
import {Four} from './steps/four';
import {Five} from './steps/five';
import {Six} from './steps/six';

const client = new HelloSign();

export const MainForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [templateData, setTemplateData] = useState({})
    const [signatureRequest, setSignatureRequest] = useState({})
    const [signUrl, setSignUrl] = useState('')
    
    switch(step) {
     case 1:
        return <One setStep={setStep} setTemplateData={setTemplateData}/>
     case 2:
        return <Two setStep={setStep} setSignatureRequest={setSignatureRequest} templateData={templateData}/>
     case 3:
        return <Three setStep={setStep} signatureRequest={signatureRequest} setSignUrl={setSignUrl}/>
     case 4:
        return <Four setStep={setStep} signUrl={signUrl}/>
     case 5:
        return <Five setStep={setStep} signatureRequest={signatureRequest}/>
     case 6:
        return <Six setStep={setStep}/>
    }
    
    return <div>main form</div>

};