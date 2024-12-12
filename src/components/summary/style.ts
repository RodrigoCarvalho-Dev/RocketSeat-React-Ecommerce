import styled from "styled-components";


export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   margin-top: -7.5rem;


   div {
    background: var(--grey);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color : var(--text-white);
   }

   header {
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   strong {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
   }
`;