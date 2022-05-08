import SingleCard from './singleCard';
import { CardGrid } from './styles.js';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import returnIcon from '../../assets/dekodo-assets/botoes/btn-voltar.svg';
import { Background, Title, Return, Ligth, BottomLigth } from '../../styles/generalStyles';
import card1 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/cao.png';
import card2 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/golfinho.png';
import card3 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/hamster.png';
import card4 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/raposa.png';
import card5 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/tigre.png';

const Animais = () => {
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [matches, setMatches] = useState(0);

    const cardLetras = [
        {"src": card1, matched: false},
        {"src": card2, matched: false},
        {"src": card3, matched: false},
        {"src": card4, matched: false},
        {"src": card5, matched: false}
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
                
                setTimeout(() => matches === 4 ? navigate("../memoria/endAnimais") : resetChoices(), 1500);
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
};

export default Animais;
