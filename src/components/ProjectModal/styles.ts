import styled from "styled-components";

interface ProjectContainerProps{
    backgroundImage: string
}

export const Container = styled.form`
 .form-container {
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-column-gap: 1rem;

     div:last-child {
     grid-column: span 2;
     }
     @media(max-width: 900px){
        div {
        grid-column: span 2;
        }
     }
 }
.project-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 30px;
}
.button-container {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
     grid-column-gap: 2rem;
     grid-row-gap: 1rem;
}
`;
export const ProjectContainer = styled.div<ProjectContainerProps>`
width: 100%;
height: 330px;
background-image: url("${({backgroundImage}) => backgroundImage}");
background-position: center;
background-size: cover;

position: relative;
display: flex;
justify-content: center;
align-items: center;

button{
position: absolute;
border: none;
background: transparent;
}
}
`;