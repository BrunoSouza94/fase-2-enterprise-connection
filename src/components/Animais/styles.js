import styled from 'styled-components';

export const CardGrid = styled.div 
`
    & {
        position: absolute;
        left: 12.5vw;
        top: 33vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 5vw;
    }

    & .card {
        position: relative;
        aspect-ratio: 1/1;
        width: 10vw;
    }

    & .card img {
        display: block;
        aspect-ratio: 1/1;
        width: 10vw;
    }

    & .card .front {
        transition: all ease-in 0.2s;
        transform: rotateY(90deg);
        position: absolute;
    }

    & .card .flipped .front {
        transform: rotateY(0deg);
        transition-delay: 0.2s;
    }

    & .card .back {
        transition: all ease-in 0.2s;
        transition-delay: 0.2s;
    }

    & .card .flipped .back {
        transform: rotateY(90deg);
        transition-delay: 0s;
    }
`