import styled from 'styled-components';

export const CardGrid = styled.div
`
    & {
        top: 45vh;
        left: 15.7vw;
        display: grid;
        grid-gap: 5vw;
        position: absolute;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const Card = styled.div
`
    & {
        width: 10vw;
        color: white;
        cursor: pointer;
        position: static;
        font-size: 15vh;
        font-weight: 700;
        border-radius: 15px;
        aspect-ratio: 1/1.25;
        border: 6px solid #75DB5B;
        background-color: rgba(255,255,255,.20);
    }
`;