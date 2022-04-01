import styled from "styled-components";

export const Container = styled.header`
width: 100%;
display: grid;
grid-areas: header;

grid-auto-rows: auto;
grid-template-columns: 1fr;
background-color: var(--purple-100);

justify-items: center;
align-items: center;

@media(max-width: 568px){
    padding-bottom: 10px;
}

.top{
    width: 100%;
    max-width: 1080px;
    display: grid;
    grid-template-rows: 1fr;
    height: 150px;
    grid-template-columns: repeat(auto-fit, auto);
    grid-template-areas: 'dev logo register';

    justify-items: center;
    align-items: center;

    @media(max-width: 780px){
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        grid-template-areas: 
        'logo logo'
        'dev register';
    }
    @media(max-width: 568px){
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
        grid-template-areas: 
        'logo'
        'dev' 
        'register';
        height: auto;
        padding: 48px;
        grid-gap: 2rem;
    }

    .dev{
        grid-area: dev;
    }
    .logo{
        grid-area: logo;
    }
    .register{
        grid-area: register;
    }
    .no-decoration{
        text-decoration: none;
    }

    span{
        color: var(--purple-200);
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 0.85rem;

        img{
            max-width: 179px;
        }
        a{
            color: var(--purple-200);
            font-weight: 700;
            padding: 4px 17px;
            border-radius: 4px; 
        }
            .active{
                color: var(--purple-100);
                background-color: var(--purple-200);
            }
    }
}
h1{
    font-size: 3.1rem;
    font-weight: 481px;
    max-width: 638px;
    width: 100%;
    text-align: center;
    padding-bottom: 56px;

    span{
        color: var(--purple-200);   
    }
        @media(max-width: 568px){
            padding-top: 30px;
            padding-bottom:56px;
            font-size: 2.5rem;
        }
}
`;