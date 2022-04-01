import React from "react";
import { Container } from "./styles";
import Photo from '../../assets/images/Photo.png';
import Oval  from '../../assets/images/Oval.png';
import {Filter} from '../../components/Filter';
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import {Helmet} from "react-helmet";
interface DevProps{
    id: number
    name: string
    Oval: string
    Photo: string
}

export function Home(){

    const devs:DevProps[] = [
        {id: 1, name: "Francisco", Oval, Photo},
        {id: 2, name: "Araujo", Oval, Photo},
        {id: 3, name: "Viana", Oval, Photo},
        {id: 4, name: "José", Oval, Photo},
        {id: 5, name: "Maria", Oval, Photo},
        {id: 6, name: "Antonio", Oval, Photo},
        {id: 7, name: "Fabio", Oval, Photo},
        {id: 8, name: "Arcanjo", Oval, Photo},
    ]

    return(
        <>
      <Helmet>
        <title>Encontre os Melhores Desenvolvedores do Mundo!</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

        <Header data={{title: 'Encontre os', 
        titleP: 'Melhores Desenvolvedores do Mundo!'}} />
        <Background>
        <Filter />
<Container>
{devs.map(item =>(
    <div key={item.id} className={'dev-box'}>
    <Link to={`perfil/${item.id}`}>
    <img src={Photo} alt={item.name} />
    </Link>
    <div>
    <img src={Oval} alt={item.name}/>
    <h2>{item.name}</h2>
    </div>
</div>
))}
</Container>
</Background>
       </>
    );
}