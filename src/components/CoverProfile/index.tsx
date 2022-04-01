import React from "react";
import Fotopoulos from "../../assets/images/fotopoulos.jpg";
import { Button } from "../Button";
import {Container} from "./styles";

interface ICoverProfileProps{
    name?: String
}

export function CoverProfile({name}: ICoverProfileProps){

    return(
        <Container file={Fotopoulos}>  
          {name ? (
              <h1>{name}</h1>
          ):(
        <div>
            <Button title={'Editar capa'} handleAction={() => {}}/>
        </div>
          )}   
        </Container>
    )
}