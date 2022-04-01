import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { CoverProfile } from "../../components/CoverProfile";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import Photo from "../../assets/images/Photo.png";
import avatarjpg from "../../assets/images/avatarjpg.jpg";
import { DisplayProjectModal } from "../../components/DisplayProjectModal";

interface ISkillsProps{
    id: string
    name: string
}
interface IProjectImagesProps{
    id: string
    url: string
    thumb: string
}

interface IProjectsProps{
    id: string
    title: string
    description: string
    images: IProjectImagesProps[]
}

export interface IProfileProps{
    id: string
    first_name: string
    last_name: string
    full_name: string
    avatar?: string
    description: string
    email: string
    phone_number?: string
    skills: ISkillsProps[],
    projects: IProjectsProps[]
}

export function Profile(){
    const {profileId} = useParams()
    const [profile, setProfile] = useState<IProfileProps>({} as IProfileProps)
    const [projectId, setProjectId] = useState('')
    const[IsOpenDisplayProjectModal, setIsOpenDisplayProjectModal] = useState(false)

    function handleCloseDisplayProjectModal(){
        setIsOpenDisplayProjectModal(false)
    }

    function handleOpenDisplayProjectModal(){
        setProjectId('1');
        setIsOpenDisplayProjectModal(true)
    }

    useEffect(() => {
      const user: IProfileProps = {
          id: String(profileId),
          avatar: avatarjpg,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam dui. Cras quis quam condimentum, commodo justo vel, dapibus quam. Proin condimentum varius condimentum.',
          email: 'francisco@gmail.com',
          first_name: 'Francisco',
          last_name: 'Araujo',
          full_name: 'Francisco Viana Araujo',
          phone_number: '6199999-9999',
          skills: [
              {id: String(1), name: 'Front-end'},
              {id: String(2), name: 'Back-end'},
              {id: String(3), name: 'Games'},
              {id: String(4), name: 'Mobile'},
              {id: String(5), name: 'BlockChain'}             
          ],
          projects: [
              {
              id: String(1),
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam dui. Cras quis quam condimentum, commodo justo vel, dapibus quam. Proin condimentum varius condimentum.',
              title: 'Danki_Jobs', images: [
            
             {id: String(1), thumb: Photo, url: Photo},
             {id: String(2), thumb: Photo, url: Photo},
             {id: String(3), thumb: Photo, url: Photo},
             {id: String(4), thumb: Photo, url: Photo}
              ]},
              {
               id: String(2),
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam dui. Cras quis quam condimentum, commodo justo vel, dapibus quam. Proin condimentum varius condimentum.',
               title: 'Danki_Club', images: [
              {
                id: String(2), thumb: Photo, url: Photo}
                ]}
          ]
      }
      setProfile(user)
    }, [])
    return(
        <>
        {profile.id && (
            <>
        <Helmet>
         <title>Danki Jobs - {profile.full_name}</title>
         <meta name={'description'} 
         content={'Programador(a) extraordinário(a) ${profile.full_name}'} />
        </Helmet>
        <Header />
        <CoverProfile name={profile.full_name} />
        <Background>
        <Container>
        <article>
            <header>
                <img src={profile.avatar} alt={profile.full_name} />
                <p>{profile.description}</p>
            </header>
            <div>
                <Button title={'Entrar em contato via email'} 
                handleAction={() => {}}/>
                <Button title={'Chamar no Whatsapp'} 
                outline handleAction={() => {}}/>
            </div>           
        </article>
        <section className={'skills'}>
             <h2>Habilidades</h2>
             <div>
              {profile.skills.map(skill => (             
              <p key={skill.id}>{skill.name}</p>             
             ))}     
             </div>       
            </section>

            <section className={'projects'}>
             <h2>Projetos</h2>
             <div>
                 {profile.projects.map(project => (
                     <article key={project.id}>
                     <header>
                     <img src={project.images[0].url} alt={project.title} 
                     onClick={handleOpenDisplayProjectModal}/>
                     <h1>{project.title}</h1>
                     </header>
                     <p>{project.description}</p>
                     </article>                    
                 ))}
                 </div>
            </section>
        </Container>
        </Background>

        <DisplayProjectModal
        project={profile} 
        isOpen={IsOpenDisplayProjectModal} 
        closeModal={handleCloseDisplayProjectModal}/>
            </>
        )}
        </>    
    )
}