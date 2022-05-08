import styled from "styled-components";

export const Title = styled.p
`
    & {
        position: absolute;
        font-weight: 700;
        font-size: 6.4vh;
        width: 21.4vw;
        color: white;
        height: 10vh;
        left: 39.3vw;
        top: 12vh;
    }
`

export const Message = styled.p
`
    & {
        position: absolute;
        font-weight: 700;
        font-size: 4.3vh;
        color: #A07AD3;
        width: 38.7vw;
        height: 10vh;
        left: 30.6vw;
        top: 21.5vh;
    }
`

export const CardGrid = styled.div
`
    & {
        position: absolute;
        left: 9vw;
        top: 17.4vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 5vw;
    }
`

export const Card = styled.img
`
    & {
        top: 33.5vh;
        width: 5vw;
        margin-left: 1vw;
        position: relative;
        aspect-ratio: 1/1.25;
       
    }
`

export const CardAnimais = styled.img
`
    & {
        top: 33.5vh;
        width: 5vw;
        margin-left: 1vw;
        position: relative;
        aspect-ratio: 1/1;
       
    }
`