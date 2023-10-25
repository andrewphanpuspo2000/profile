import React from 'react'
import { Col, Row } from 'react-bootstrap'
import lib from '../../../assests/storebook.JPG'
import spade from '../../../assests/spadeimg.JPG'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
export const Projects = () => {

  return (
    <div className='w-100 px-3 root-container-project text-light' id='projects'>
       <p className='text-center'>Projects</p>
       <div className='card-container-custom'>
        <Row className="w-100 d-flex card-contain-1">

            <Col md={4}>
          <div className='card-custom'>
           <p className='text-center'>Library System</p>
           <div className='image-card'>
            <img src={lib} className='w-100 h-100' />
           </div>
            <div className='project-icon'>
              <a className='nav-link' href='https://github.com/andrewphanpuspo2000/client-library' target='_blank'><AiFillGithub/></a>
              <a className='nav-link' href='https://graceful-plum-coyote.cyclic.app/' target='_blank'><AiOutlineLink/></a>
            </div>
          </div>
          </Col>
            <Col md={4}>
          <div className='card-custom'>
           <p className='text-center'>Spade</p>
           <div className='image-card'>
            <img src={spade} className='w-100 h-100' />
           </div>
            <div className='project-icon'>
              <a className='nav-link' href='https://github.com/andrewphanpuspo2000/onejob-client' target='_blank'><AiFillGithub/></a>
              <a className='nav-link' href='https://spade-client.onrender.com' target='_blank'><AiOutlineLink/></a>
            </div>
          </div>
          </Col>
          
            
          </Row>
       </div>
    </div>
  )
}
