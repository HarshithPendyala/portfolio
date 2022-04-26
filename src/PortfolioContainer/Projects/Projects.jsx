import React from 'react'
import './Projects.css'
import { ProjectsData } from '../../ProjectData';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink, CardFooter } from 'reactstrap';



export default function Projects() {
  function RenderCard(project){
    return(
      <>

      <Card  style={{height:'100%',borderRadius:'15px',backgroundColor:'#242526'}}>
        <CardImg top width="300px" height="300px" className='p-2' src={project.project.img} alt="projects"/>
        <CardBody>
          <CardTitle tag="h2" className='font-weight-bold m-1'>{project.project.title} </CardTitle>
          <CardSubtitle className='m-1'>{project.project.technologies.map((tech)=>{
            return(

            <div style={{backgroundColor:'#3A3B3C',margin:'2px',padding:'0 5px',display:'inline',color:'#B0B3B8'}} key="project.project.id">
                
                {tech}
              </div>
              );})}
          </CardSubtitle>
          <CardText className='font-weight-bold m-3' style={{color:'#B0B3B8'}}>{project.project.description}</CardText>
        </CardBody>
        <CardFooter>
        <Button className='btn-info m-1'><CardLink href={project.project.live_demo} target="_blank" className='text-white'>Live Demo</CardLink></Button>
          <Button className='btn-info m-1'><CardLink href={project.project.code_link} target="_blank" className='text-white'>Code</CardLink></Button>

        </CardFooter>
      </Card>
      </>
    );
  }
  return (
    <div className='p container' id='projects'>
            <div className="row justify-content-center">
        <h1 className="p-title col-7 col-sm-6 col-md-auto">Apps I've built</h1>
            </div>
        <div className='row justify-content-center'>          
              {ProjectsData.map((item)=>(
                <div key={item.id} className="col-11 col-md-5 m-1">
                <RenderCard  project={item}/>
               </div>
                ))}
        </div>
    </div>
    
  )
}
