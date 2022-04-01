import React from "react"
import Modal from "react-modal"
import { IProfileProps } from "../../pages/Profile"
import { Button } from "../Button"
import {Container} from "./styles"

interface IDisplayProjectModalProps{
    closeModal: () => void
    isOpen: boolean
    projectId?: String
    project: IProfileProps
}

export function DisplayProjectModal({closeModal, isOpen, project}: IDisplayProjectModalProps){
    return(
        <Modal 
        isOpen={isOpen}
        overlayClassName={'react-modal-overley'} 
        className={'react-modal-content'} 
        onRequestClose={closeModal}
        >
        <button type={'button'} 
        onClick={closeModal} 
        className={'react-modal-close'}>
           <span>&times;</span>
        </button>
         <Container>
          <article>
              <img src={project.avatar} alt={project.full_name} />
              <header>
              <h1>{project.full_name}</h1>
              <h2>Desenvolvedor(a)</h2>
              </header>
          </article>
          <section>
              <h2>{project.projects[0].title}</h2>
              <p>{project.projects[0].description}</p>
              <div>
                  {
                      project.projects[0].images.map(Image => (
                       <img src={Image.url} alt="" />
                      ))
                  }
              </div>
          </section>
          <section>
          <div>
                <Button title={'Entrar em contato via email'} 
                handleAction={() => {}}/>
                <Button title={'Chamar no Whatsapp'} 
                outline handleAction={() => {}}/>
            </div>
          </section>
         </Container>
        </Modal>
    )
}