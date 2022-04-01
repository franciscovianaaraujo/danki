import React from "react";
import {Container} from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    handleAction: () => void
    title: string,
    outline?: boolean
    color?:string
}

export function Button({title, handleAction, color, outline = false, ...rest}: Props){
    return(
        <Container outline={outline} onClick={handleAction} btnColor={color} {...rest}>
         {title}
        </Container>
    )
}