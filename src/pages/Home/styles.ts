import styled from "styled-components";

export const Container = styled.section`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(380px, 400px));
grid-auto-rows: auto;
grid-gap: 1ren;
justify-content: center;
margin-top: 60px;

@media(max-width: 1260px){
   grid-template-columns: repeat(auto-fit, minmax(380px, 480px));
}

.dev-box{
   width: 100%;
  max-width: 400px;

  @media(max-width: 1260px){
     max-width: 480px;
  }

  img{
   width: 100%;
   height: auto;
   max-width: 380px;
   margin-bottom: 17px; 
  }

  div{
   display: flex;
   flex-direction: row;
   align-items: flex;

   img{
      width: 50px;
      height: 50px;
      border-radius: 25px;
      margin-right: 16px;
   }
   h2{
      font-weight: 700;
      font-size: 1.6rem;
   }
  }
}
`;