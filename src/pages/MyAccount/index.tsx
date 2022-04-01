import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Background } from "../../components/Background";
import { CoverProfile } from "../../components/CoverProfile";
import { FormControl } from "../../components/FormControl";
import { Header } from "../../components/Header";
import { Container, ProjectContainer } from "./styles";
import profile from "../../assets/images/profile.png";
import Photo from "../../assets/images/Photo.png";
import Upload from "../../assets/images/Upload.png";
import { Button } from "../../components/Button";
import { ProjectModal } from "../../components/ProjectModal";
import { useNavigate } from "react-router-dom";

export interface ProjectImageProps{
    id: string
    name: string
    path: string
  }

export interface ProjectProps{
    id: string
    name: string
    description: string
    url: string
    images: ProjectImageProps[]
}

export function MyAccount(){
    const navegation = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [projects, setProjects] = useState<ProjectProps[]>([])

    function handleOpenProjectModal(){
     setIsOpen(true)
    }
    function handlePublicPreviewProfile(){
        navegation('/perfil/1')
    }
    function handleCloseProjectModal(){
     setIsOpen(false)
    }
    function handleSetProject(data: ProjectProps):void{
     setProjects([...projects, data])
    }

    return(
        <>
        <Helmet>
         <title>Minha conta - na Danki Jobs</title>
         <meta name={'description'} content={'minha conta na Danki Jobs'} />
        </Helmet>
        <Header />
        <CoverProfile />


        <Background>
        <Container>
            <form action="">
                <div className="picture">
                 <div>
                     <button type={'button'}>
                         <img src={Upload} alt={'upload'} />
                     </button>
                 </div>
                 <img src={profile} className="img-avatar" alt="Olá você" />
                </div>
             <div className={'container-form'}>
             <FormControl labelName={'name'} labelText={'Name'}>
             <input type="text" id={'name'} placeholder={'Digite seu nome completo'} />
             </FormControl>

             <FormControl labelName={'email'} labelText={'E-mail'}>
             <input type="email" id={'email'} placeholder={'Digite um e-mail valido'} />
             </FormControl>

             <FormControl labelName={'mobile_number'} labelText={'Whatsapp (Opcional)'}>
             <input type="number" id={'mobile_number'} placeholder={'+55 61 99999-9999'} />
             </FormControl>
             </div>
             <div className="about">
             <FormControl labelName={'about'} labelText={'Sobre Você'}>
             <textarea name={'about'} id={'about'} rows={5}
             placeholder={'Escreva um resumo sobre sua carreira'} />
             </FormControl>
             </div>
             <div className="skills">
                 <h2>Habilidades</h2>
             <div className="skills-items">
             <div>
                 <input type="checkbox" id={'frontend'} name={'frontend'} />
                 <label htmlFor="frontend" >Front-end</label>
             </div>
             <div>
                 <input type="checkbox" id={'beckend'} name={'beckend'} />
                 <label htmlFor="beckend" >Beck-end</label>
             </div>
             <div>
                 <input type="checkbox" id={'games'} name={'games'} />
                 <label htmlFor="games" >Games</label>
             </div>
             <div>
                 <input type="checkbox" id={'mobile'} name={'Mobile'} />
                 <label htmlFor="mobile" >Mobile</label>
             </div>
             <div>
                 <input type="checkbox" id={'blockchain'} name={'blockchain'} />
                 <label htmlFor="blockchain" >Blockchain</label>
             </div>
             </div>
             </div>
            
             <div className="projects">
              <h2>Projetos</h2>
              <div className="project-items">
              {projects.length > 0 ? projects.map(project =>(              
               <ProjectContainer key={project.id} 
               backgroundImage={project.images[0].path ?? Photo}>              
               <div>
               <h3><a href={project.url} title={project.name}>{project.name}</a></h3>
               <p>{project.description}</p> 
               </div>
               </ProjectContainer>                     
              )) : (
                  <p>Você não adicionou nenhum projeto:</p>
              )}
              </div>
              </div>
             
              <div className="footer">
                  <Button title={'Adicionar novo projeto'} 
                  type={'button'} 
                  handleAction={handleOpenProjectModal}/>
                 
                 <Button title={'Ver meu perfil publico'} 
                 outline type={'button'}
                 handleAction={handlePublicPreviewProfile}/>
              </div>
              
            </form>
        </Container>
        </Background>
        <ProjectModal isOpen={isOpen} 
        closeModal={handleCloseProjectModal} 
        handle={handleSetProject}/>
        </>
    )
}