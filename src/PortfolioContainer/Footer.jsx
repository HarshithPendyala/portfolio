import {FaLinkedin,FaGithubSquare,FaArrowUp} from 'react-icons/fa';
import {HiDocument} from 'react-icons/hi'


const Footer = props => {
    return (
        <div style={{position:"relative",width:'100%',backgroundColor:'#242526',height:'25%'}}>

            <div className="container" >

            <div className="row justify-content-center">
                <a href="#home" className='text-white fa-2x'><FaArrowUp/></a>
            </div>
            <div className="row justify-content-center">
            <a className='text-secondary fa-3x  m-1' href='https://www.linkedin.com/in/harshith-pendyala?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE6nIx2DVQCS%2F4R4ICfESAQ%3D%3D' target='_blank' rel='noreferrer'><FaLinkedin/></a>
            <a className='text-secondary fa-3x  m-1' href='https://github.com/HarshithPendyala' target='_blank' rel='noreferrer'><FaGithubSquare/></a>
            <a className='text-secondary fa-3x  m-1' href="Harshith-Pendyala.pdf" target="_blank" rel="noreferrer" ><HiDocument/></a>          
   
            </div>
            </div>
        </div>


    );

}

export default Footer;