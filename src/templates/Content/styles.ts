import styled from 'styled-components';

export const Content = styled.main`
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat( auto-fit, minmax(20rem, 1fr));
    margin: 3rem;

    .char-container {
        align-items: center;
        background-color: #F4F4F4;
        box-shadow: 0.1em 0.1em 0.3em black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        width: 20vw;
    }

    img {
        display: flex;
        height: auto;
        justify-content: center;
        margin: 1rem;
        width: 15vw;
    }
`