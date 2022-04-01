import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import {Button} from "../../components/Button";
import { Container } from "./styles";
import {Helmet} from "react-helmet";
import { FormControl } from "../../components/FormControl";

export function Register(){

   const dataTitle = {title: 'Bem-Vindo(a) ao', 
   titleP: 'Banco de Talentos da Danki Code'}
   const navigation = useNavigate()


   function handleRegister(event: FormEvent){
     event.preventDefault()
     navigation('/minha-conta')
   }

    return(
 <>
     <Helmet>
        <title>Bem-Vindo(a) ao Banco de Talentos da Danki Code</title>
        <meta name="description" 
        content="Bem-Vindo(a) ao Banco de Talentos da Danki Code, cadstre-se
         e seja encontrado por milhares de empresas" />
      </Helmet>
    <Header data={dataTitle} />

    <Background>
     <Container>
     <form action="" onSubmit={handleRegister} method={'post'}>
        <FormControl labelName={'name'} labelText={'nome'}>
        <input type={"text"} id={'name'} placeholder={'Digite seu nome completo'} />
        </FormControl>
        
        <FormControl labelName={'email'} labelText={'E-mail'}>
        <input type={"email"} id={'email'} placeholder={'Digite seu e-mail'} />
        </FormControl>

        <FormControl labelName={'senha'} labelText={'Senha'}>
        <input type={"password"} id={'password'} 
        placeholder={'Minimo de 6 caracteres'} />
        </FormControl>

        <div className={'btnContainer'}>
         <Button title={'finalizar meu cadastro'} handleAction={() => {}}></Button>
        </div>
     </form>
     </Container>
    </Background>
   </>
    )
}