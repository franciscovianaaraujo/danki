import React, { ReactNode } from "react";
import { Container } from "./styles";

interface FormProps{
    labelName: string
    labelText: string
    children: ReactNode
}

export function FormControl({labelName, labelText, children}: FormProps){
    return(
        <Container>
         <label htmlFor={labelName}>{labelText}</label>
         {children}
        </Container>
    )
}