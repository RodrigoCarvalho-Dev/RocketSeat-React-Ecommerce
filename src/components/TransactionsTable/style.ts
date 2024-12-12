import styled from "styled-components";


export const Container = styled.main`
padding: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;


`;

export const Content = styled.div`
    background: var(--black);
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


        p {
            color : var(--text-white);    
        }

        div {
            display: flex ;
            width: 10rem;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    `

export const Information = styled.div`
    
    display: flex ;
    justify-content: space-around;
    color: var(--text-white);
    padding: 2rem 0rem 0rem;
    font-size: 1.5rem;
    font-weight: 500;
    
    `

