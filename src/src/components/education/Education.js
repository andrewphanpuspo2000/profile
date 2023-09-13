import React, { useState } from 'react'
import sun from '../../../assests/sun.gif'
import {Row,Col,Button} from 'react-bootstrap'
import { EduSlide } from "../carousel/Carousel"
import {AiOutlineArrowRight} from 'react-icons/ai'
export const Education = () => {

    const [visibleControl,setVisibleControl]= useState(false);
  return (
    <div className='edu-container container'>
    <Row className="w-100">
        <Col sm={6} className='d-flex align-items-center' >
          <div className="education-intro ">
            <p>Education</p>
            <p>To check my education background please click below button</p>
          { 
           !visibleControl?
            <Button onClick={()=>setVisibleControl(true)}>Click to See <AiOutlineArrowRight/></Button>:
            <Button onClick={()=>setVisibleControl(false)} variant='danger'>Back to Sun <AiOutlineArrowRight/></Button>
          }
          </div>
        </Col>
        <Col sm={6}>
        <div className= {!visibleControl?"w-100 sun-image":"sunDisappear"} > <img src={sun} className='w-100' /></div>
         <div className={visibleControl?"education-list-in default-carousel":"education-list-out"}>
             <EduSlide/>
         </div>
        </Col>
    </Row>
    </div>
  )
}
