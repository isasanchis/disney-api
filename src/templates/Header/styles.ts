import styled from 'styled-components';

export const Container = styled.header`
    background-image: url("https://s3.envato.com/files/6a205359-b92d-40c8-85bb-5c43f34e9177/inline_image_preview.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0 0.2em black;

    div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-family: "NeueHaas";
        font-size: 4em;
    }

    p {
        font-family: "NeueHaas";
    }

    img {
        height: 20rem;
        object-fit: cover;
        -webkit-filter: drop-shadow(0.7em 0.7em 0.7em #222 );
        filter: drop-shadow(0.7em 0.7em 0.7em #222);
    }
`