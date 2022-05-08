import styled from 'styled-components';

export const Card = styled.div
`
    & {
        position: relative;
        height: 35vh;
        width: 15vw;
        margin-left: 30vw;
        top: 27.5vh;
        color: rgba(255, 255, 255, .4);
        text-align: center;
    }
`;

export const Image = styled.img 
`
    &{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 15vw;
        height: 35vh;
    }
    &:hover {
        width: 17.5vw;
        height: 40vh;
        left: -1.25vw;
        bottom: -2.5vh;
    }
`;

export const SecondCard = styled.div
`
    & {
        position: relative;
        height: 35vh;
        width: 35vh;
        margin-left: 10vw;
        top: 27.5vh;
        border-radius: 10000px;
    }
`;

export const SecondImage = styled.img 
`
    & {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 35vh;
        height: 35vh;
    }
    &:hover {
        width: 40vh;
        height: 40vh;
        left: -2.5vh;
        bottom: -2.5vh;
    }
`;

export const Description = styled.div
`
    & {
        position: relative;
        height: 7.5vh;
        width: 15vw;
        top: 41.5vh;
        border-radius: 140px;
        border: 3px solid #FFF;
        text-align: center;
        
    }

    &:hover {
        background-color: #7F4DC5;
    }
`;

export const SecondDescription = styled.div
`
    & {
        position: relative;
        height: 7.5vh;
        width: 15vw;
        top: 41.5vh;
        border-radius: 140px;
        border: 3px solid #FFF;
        text-align: center;
        left: 1.5vw;
    }

    &:hover {
        background-color: #7F4DC5;
    }
`;