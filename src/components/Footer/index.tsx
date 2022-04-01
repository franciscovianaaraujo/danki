import React from "react";
import { Container } from "./styles";

export function Footer(){

    const dateYear = new Date().getFullYear()

    return(
        <Container>
            <p>Copyrigth c {dateYear} street code</p>
        </Container>
    )

}