import styled from "styled-components";

export const ContainerCotizacion = styled.section`
width: 80%;
margin: 0 auto;
padding-bottom: 4rem;
overflow: hidden;
@media screen and (max-width: 600px) {
  width: 86%;
}
`;

export const CotizacionTitle = styled.div`
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


export const Row32x68 = styled.div`
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
export const Row40x60 = styled.div`
display: grid;
width: 100%;
grid-template-columns: 44% 55.5%;
justify-content: space-between;
margin-bottom: 0.6rem;

p {
  border: 2px solid var(--primary-color3);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  font-size: 2.2rem;
  min-height: 5rem;
  width: 100%;

  text-overflow:ellipsis;
  white-space:nowrap; 
  overflow:hidden; 
}

h5 {
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

@media screen and (max-width: 600px) {
  ${({ responsive }) => responsive ? "grid-template-columns: 100%;" : ""}
  ${({ responsive }) => responsive ? "gap: 0.2rem;" : ""}

  
}

`;

export const FlexCenterBtn = styled.div`
display: flex;
width: 80%;
margin: 0 auto;
justify-content: center;
`;
