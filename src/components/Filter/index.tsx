import React from "react";
import { Container} from "./styles";

export function Filter(){

    const filters = [
        'Todos',
        'Games',
        'FrontEnd',
        'BackEnd',
        'Moblile',
        'Blockchain',
        'Outros',
    ]

 return(
     <Container>
        {filters.map((item: string , index: number ) => 
        (<button key={index} type={'button'}>{item}</button>))}
     </Container>
 )
}