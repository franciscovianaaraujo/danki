import React, { Children, ReactNode } from "react";
import {Container} from "./styles";

interface props{
    children: ReactNode
}
export function Background({children} : props){
    return(
    <Container>
     {children}
    </Container>
    )
    }