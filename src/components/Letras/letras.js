import SingleCard from './singleCard';
import { CardGrid } from './styles.js';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import returnIcon from '../../assets/dekodo-assets/botoes/btn-voltar.svg';
import { Background, Title, Return, Ligth, BottomLigth } from '../../styles/generalStyles';
import cardA from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-a.png';
import cardB from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-b.png';
import cardD from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-d.png';
import cardI from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-i.png';
import cardO from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-o.png';

const Letras = () => {
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [matches, setMatches] = useState(0);

    const cardLetras = [
        {"src": cardA, matched: false},
        {"src": cardB, matched: false},
        {"src": cardD, matched: false},
        {"src": cardI, matched: false},
        {"src": cardO, matched: false}
    ];

    let shuffledCards;

    useEffect(() => {
        if(!shuffledCards) {
            shuffledCards = [...cardLetras, ...cardLetras]
            .sort(() => Math.random() - .5)
            .map((card) => ({ ...card, id: Math.random() }));

            setCards(shuffledCards);
        }
    }, [])

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };
    const navigate = useNavigate();

    useEffect(() => {
        if(choiceOne && choiceTwo) {
            setDisabled(true);
            if(choiceOne.src === choiceTwo.src){
                setMatches(matches + 1);
                setCards(cards => {
                    return cards.map(card => {
                        if(card.src === choiceOne.src){
                            return {...card, matched: true}
                        } else return card
                    })
                })
                
                setTimeout(() => matches === 4 ? navigate("../memoria/endLetras") : resetChoices(), 1500);
            } else {
                setTimeout(() => resetChoices(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    const resetChoices = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    };

    return (
        <Background>
            <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
            <Ligth style={{left: "3vw", top: "7vh"}}/>
            <Ligth style={{left: "70vw", top: "25vh"}}/>
            <BottomLigth />
            <Link to="/memoria">
                <Return src={returnIcon} />
            </Link>
            <Title>
                {"Dekōdo".toUpperCase()}
            </Title>
            <div>
                <CardGrid>
                    {cards.map(card => (
                        <SingleCard 
                            key={card.id} 
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))}
                </CardGrid>
            </div>
        </Background>
    );
}


export default Letras;
