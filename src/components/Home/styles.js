import styled from 'styled-components';

export const Card = styled.div
`
    & {
        position: relative;
        height: 55vh;
        width: 15vw;
        margin-left:7.5vw;
        top: 17.5vh;
        border-radius: 600px;
    }
`
export const Image = styled.img 
    `
        & {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 15vw;
            height: 55vh;
        }
        &:hover {
            width: 16.25vw;
            height: 57.5vh;
        }
    `;

export const Description = styled.div
`
    & {
        position: relative;
        height: 7.5vh;
        width: 15vw;
        top: 60vh;
        border-radius: 140px;
        border: 3px solid #FFF;
        text-align: center
    }
    &:hover {
        background-color: #7F4DC5;
    }
`

export const DescriptionDisabled = styled.div
`
    & {
        position: relative;
        height: 7.5vh;
        width: 15vw;
        top: 60vh;
        border-radius: 140px;
        border: 3px solid #FFF;
        text-align: center
    }
`

