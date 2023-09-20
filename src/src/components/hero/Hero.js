import { Col, Container, Row } from "react-bootstrap"
import TypewriterEffect from "../typewriter/Typewriter"
import { useEffect, useState } from "react"
import { Box1 } from "../threejs/ThreeScene";

export const Hero = () => {

    const [timeout,setDelay]=useState(false);
    useEffect(()=>{
     setTimeout(()=>{

        setDelay(true);
     },2000);
    },[]);
  return (
    <div className="hero-container">
        <Container>
     <Row className="w-100 ">
        <Col md={6}>
          <div className="intro opacity-75 p-3">
            <p><TypewriterEffect text="Hi, I'm Andrew 👋"/></p>
           { 
          timeout===true &&(
           <p><TypewriterEffect speed={50} text="I am a fresh-graduate in Information Techonlogy. Highly passionate working in IT environment. Passionate in developing web development using up to date technology. Learning new knowledge, adapting to new environment and collaborating in workplace are my main soft skills that I am condifence with. Skill in several programming languages used in web developement."/></p>
            )
          } 
          </div>
        </Col>
       <Col className="skills-title" id="skills">
        <p>Skills</p>
       </Col>
        <Col md={6} id="cube" className="d-flex justify-content-center cube">
         <Box1/>
        </Col>
        </Row>
        </Container>
    </div>
  ) 
}
