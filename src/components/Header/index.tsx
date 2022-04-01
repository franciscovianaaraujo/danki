import React from "react";
import { Container } from "./styles";
import logo from '../../assets/images/logo_danki_2x.png';
import { Link, NavLink } from "react-router-dom";


interface Props{
 data?: {
     title: string
     titleP: string
 }
}

export function Header({data}: Props) {
    return (
        <Container>
            <div className={'top'}>
                <span className={'dev'}>
                    <Link to={'/'} className={'no-decoration'}
                     title={'Desenvolvedores'}>Desenvolvedores</Link>
                </span>
                <span className={'logo'}>
                    <Link to={'/'} title={'Desenvolvedores'}>
                     <img src={logo} alt="street" />
                    </Link>
                </span>
                <span className={'register'}>
                    <NavLink to="/cadastro" title={'Cadastrar meu Perfil'}>
                        Cadastrar meu Perfil
                    </NavLink>
                </span>
            </div>
            {data && <h1>{data?.title} <span>{data?.titleP}</span></h1>}
        </Container>
    )

}