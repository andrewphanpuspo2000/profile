import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
export function EduSlide() {

  const education=[
    {
    school:"Macquarie University",
    degree:"Diploma of Information Technology",
    from:"Jan 2019 to Jan 2020",
    achievements:["Distinction in Programming I","Distinction in Computer Science"],

    },
    {
        school:"Southern Cross University",
        degree:"Bachelor of Information Technology",
        from:"Jan 2020 to Feb 2024",
        achievements:["High Distinction in Programming II","High Distinction in OOP",
        "High Distinction in Cloud Programming","Distinction in Web Developement",
        "Distinction in Mobile Programming","Distinction in System Analysis and Design"],
    }
  ];
  return (
    <Carousel className="carousel-slide">
    {
        education.map((item,index)=>(
      <Carousel.Item>
       <div className='caro-item'>
        <p style={{opacity:"1"}}>{item.school}</p>
        <p style={{opacity:"1"}}>{item.degree}</p>
        <p style={{opacity:"1"}}>{item.from}</p>
        <p style={{opacity:"1"}}>Achievements</p>
        <ListGroup>
            {
           item.achievements.map((item,index)=>(

            <ListGroup.Item>{index+1}.{item}</ListGroup.Item>
           ))
            
            }
        </ListGroup>
       </div>
      </Carousel.Item>
         ) )
     }
    </Carousel>
  );
}

