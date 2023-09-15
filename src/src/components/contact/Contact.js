import React from 'react'
import { Row } from 'react-bootstrap';

export const Contact = () => {

    const customStyles = [
        {
        '--i': 0,
        '--clr': '#1877f2',
      },
        {
        '--i': 1,
        '--clr': ' #FF0000',
      },
        {
        '--i': 2,
        '--clr': '#000000',
      },
        {
        '--i': 3,
        '--clr': '#FF0000',
      },
       
        {
        '--i': 4,
        '--clr': '#1877f2',
      },
       
      
    
    ];
      const clickButton=()=>{
        const menu=document.querySelector(".menu");
        const toggle=document.querySelector(".toggle");
          toggle.addEventListener("click",()=>{
          menu.classList.toggle("active");
        })

      }
     
  return (
    <div className='w-100 contact-container text-light mt-4'>
       
         <div className=' contact-title  d-flex justify-content-center'>
            <p>
                Contact
            </p>
            <p>Reach Out my Social media</p>
         </div>
        
       
        <div class="menu">
           <Row className='d-flex h-100 w-100'>
           
             <div >
                <li style={customStyles[0]} >
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                </li>
                <li style={customStyles[1]}>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                </li>
                <li style={customStyles[2]}>
                <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                </li>
                <li style={customStyles[3]} className='text-danger'>
                    <a><ion-icon name="mail"></ion-icon></a>
                </li> 
                <li style={customStyles[4]}>
                <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                </li>
            </div>
            </Row>
         
            </div>
        </div>

       
 
  )
}
