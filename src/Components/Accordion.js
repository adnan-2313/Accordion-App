import React, { useState } from 'react';
import { questions } from './api';
import "../index.css";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
    const[data] = useState(questions);
  return (
    <>
    <div className='container'>
        <div className="accord">
            <h1>React Interview Question</h1>
            {data.map((curEle,index)=>{
                const {id} = curEle;
                return <MyAccordion
                 key={id} {...curEle} />
            })}
        </div>
    </div>
    </>
  )
}

export default Accordion
