import styled from 'styled-components';

export const Title = styled.h1`
 color : #E1E1E6;
 font-size: 2rem;
 display: flex;
 align-items: center;
 gap : 1rem;
`

export const Button = styled.button`
 color : #FFFFFF;
 background: #00875F;
 font-size: 2rem;
 padding: 1rem;
 display: flex;
 align-items: center;
 gap : 1rem;
 font-weight: bold;
 border : transparent;
 border-radius: 0.5rem;
`

export const HeaderContainer = styled.header`
    width: 100%;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--black);
`

export const Content = styled.div`
    width: 1120px;
    margin: 0 auto;
    padding: 0 1rem 10rem;
    display: flex;
    align-items : center;
    justify-content: space-between;

    button {
        &:hover {
        filter: brightness(0.9)
    }
    }

    
`

