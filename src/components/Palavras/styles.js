import styled from 'styled-components';

export const CardGrid = styled.div
`
    & {
        top: 22.5vh;
        left: 15.7vw;
        display: grid;
        grid-gap: 5vw;
        position: absolute;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    & .wrong {
        background-color: #59063D;
        border: 6px solid #FD68CA;
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
        background-color: rgba(255,255,255,.20);
    }
`;

export const CharCardGrid = styled.div
`
    & {
        top: 52.5vh;
        left: 15.7vw;
        width: 68.8vw;
        display: grid;
        grid-gap: 1vw;
        height: 10.7vh;
        font-size: 7.8vh;
        font-weight: 600;
        position: absolute;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    & .selected {
        transform: rotateY(90deg);
    }
`
export const CharCard = styled.div
`
    & {
        z-index: 1;
        color: white;
        cursor: pointer;
        transform: rotateY(0deg);
    }
`

export const Image = styled.img
`
    & { 
        top: 50vh;
        left: 29vw;
        z-index: 0;
        width: 34.4vw;
        aspect-ratio: 1/1;
        position: absolute;
    }
`