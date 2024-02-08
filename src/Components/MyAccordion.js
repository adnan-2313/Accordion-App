import React,{useState} from 'react'
import "./Accordion.css";
const MyAccordion = ({question,answer}) => {
    const[show,setShow] = useState();
    const changeState=()=>{
        setShow(!show);
    }
    
  return (
    <>
    <div className="items">
        <div className="title">
            <p onClick={changeState}>{show ? "➖" : "➕"}</p>
            <h2>{question}</h2>
        </div>
            { show && <p className='ans'>{`${answer}`}</p>}
        {/* <div className="content">
         
        </div> */}
    </div>
    </>
      
  )
}

export default MyAccordion
