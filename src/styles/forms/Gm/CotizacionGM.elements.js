import styled from "styled-components";

export const ContainerCotizacionGM = styled.section`
width: 80%;
margin: 0 auto;
padding-bottom: 4rem;
overflow: hidden;
@media screen and (max-width: 600px) {
width: 86%;
  
}
`;

export const CotizacionGM__Title = styled.div`
padding: 1rem 2rem;
background-color: var(--primary-color3);
border-radius: 1rem;
margin-bottom: 1rem;
margin-top: 4rem;

  p {
    font-size: 2.4rem;
    font-weight: 600;
    font-style: italic;
  }
`;

export const RowAseguradosStyle = styled.div`
display: grid;
width: 100%;
grid-template-columns: 9% 61% 29%;
justify-content: space-between;
margin-bottom: 0.6rem;

p {
   border: 2px solid var(--primary-color3);
   border-radius: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2.2rem;
   min-height: 5rem;
   width: 100%;
}
`;

export const Row2ColumCotizadorGM = styled.div`
display: grid;
width: 100%;
grid-template-columns: 32% 67.5%;
justify-content: space-between;
margin-bottom: 0.6rem;

p{
border: 2px solid var(--primary-color3);
border-radius: 1rem;
display: flex;
align-items: center;
padding-left: 3rem;
font-size: 2.2rem;


min-height: 5rem;
width: 100%;
}

h5{
border: 2px solid var(--primary-color3);
border-radius: 1rem;
display: flex;
align-items: center;
padding-left: 3rem;
font-size: 2.4rem;
font-weight: 600;

height: 5rem;
width: 100%;
}
`;

export const FlexCenterBtn = styled.div`
display: flex;
width: 80%;
margin: 0 auto;
justify-content: center;
`;
