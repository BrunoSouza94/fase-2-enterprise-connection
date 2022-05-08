import styled from 'styled-components';

export const Background = styled.div 
`
    & {
        height: 100vh;
        width: 100vw;
        position: relative;
        background-image: linear-gradient(to bottom, #652997, #000 75%);
        display: flex;
        flex-direction: row;
        text-align: center;
        overflow-y: hidden;
        overflow-x: hidden;
    }
`;

export const Title = styled.div
`
    & {
        position: absolute;
        width: 16.1vw;
        top: 5.8vh;
        left: 42vw;
        font-size: 2.1vh;
        font-weight: 700;
        line-height: 3.7vh;
        letter-spacing: 0.6em;
        color: white;
        font-family: 'OpenDyslexic';
    }
`;

export const Return = styled.img
`
    & {
        position: absolute;
        top: 4.5vh;
        left: 5vw;
    }
`

export const Ligth = styled.div
`
    &{
        position: absolute;
        width: 28vw;
        height: 43.3vh;
        border-radius: 485px;
        background: #897AF5;
        filter: blur(342px);
    }
`;

export const BottomLigth = styled.div
`
    position: absolute;
    width: 86.7vw;
    height: 56.6vh;
    bottom: -75vh;
    background: #582384;
    filter: blur(342px);
`;

export const Text = styled.div 
`
    & {
        position: relative;
        top: 1.75vh;
        color: white;
        font-style: normal;
        font-size: 2.5vh;
        font-weight: 700;
    }
`