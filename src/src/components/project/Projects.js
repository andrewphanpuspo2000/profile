import React from 'react'
import { Col, Row } from 'react-bootstrap'
import lib from '../../../assests/storebook.JPG'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
export const Projects = () => {
  return (
    <div className='w-100 px-3 root-container-project text-light'>
       <p className='text-center'>Projects</p>
       <div className='card-container-custom'>
        <Row className="w-100 d-flex card-contain-1">
            <Col md={4} >
          <div className='card-custom'>
           <p className='text-center'>Title</p>
           <div className='image-card'>
            <img src={lib} className='w-100 h-100' />
           </div>
            <div className='project-icon'>
              <AiFillGithub/>
              <AiOutlineLink/>
            </div>
          </div>
          </Col>
            <Col md={4} >
          <div className='card-custom'>
           <p className='text-center'>Title</p>
           <div className='image-card'>
            <img src={lib} className='w-100 h-100' />
           </div>
           <div className='project-icon'>
              <AiFillGithub/>
              <AiOutlineLink/>
            </div>
          </div>
          </Col>
            <Col md={4} >
          <div className='card-custom'>
           <p className='text-center'>Title</p>
           <div className='image-card'>
            <img src={lib} className='w-100 h-100' />
           </div>
           <div className='project-icon'>
              <AiFillGithub/>
              <AiOutlineLink/>
            </div>
          </div>
          </Col>
            <Col md={4} >
          <div className='card-custom'>
           <p className='text-center'>Title</p>
           <div className='image-card'>
            <img src={lib} className='w-100 h-100' />
           </div>
           <div className='project-icon'>
              <AiFillGithub/>
              <AiOutlineLink/>
            </div>
          </div>
          </Col>
            
          </Row>
       </div>
    </div>
  )
}
