import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardGrid, CharCard, CharCardGrid, Image } from './styles';
import returnIcon from '../../assets/dekodo-assets/botoes/btn-voltar.svg';
import Arara from '../../assets/dekodo-assets/game-palavras-arara/arara-pequena.svg';
import { Background, Title, Return, Ligth, BottomLigth } from '../../styles/generalStyles';

const Palavras = () => {
    const correctWord = "arara";
    const navigate = useNavigate();
    const [box1, setBox1] = useState({value: "", selected: false, id: null});
    const [box2, setBox2] = useState({value: "", selected: false, id: null});
    const [box3, setBox3] = useState({value: "", selected: false, id: null});
    const [box4, setBox4] = useState({value: "", selected: false, id: null});
    const [box5, setBox5] = useState({value: "", selected: false, id: null});
    const limit = correctWord.split("").length;
    const [qtSelected, setQtSelected] = useState(0);
    const [charsToChoose, setCharsToChoose] = useState([ 
        { value: "a", selected: false, id: Math.random() },
        { value: "g", selected: false, id: Math.random() },
        { value: "o", selected: false, id: Math.random() },
        { value: "r", selected: false, id: Math.random() },
        { value: "e", selected: false, id: Math.random() },
        { value: "g", selected: false, id: Math.random() },
        { value: "r", selected: false, id: Math.random() },
        { value: "a", selected: false, id: Math.random() },
        { value: "a", selected: false, id: Math.random() },
        { value: "o", selected: false, id: Math.random() },
        { value: "e", selected: false, id: Math.random() }
    ]);

    const handleCharSelection = async (char) => {
        setCharsToChoose(cards => {
            return cards.map(card => {
                if(card.id === char.id){
                    return {...card, selected: true}
                } else return card
            })
        });

        if(qtSelected < limit) {
            const result = 
                box1.value === "" ? await setBox1(char) :
                box2.value === "" ? await setBox2(char) :
                box3.value === "" ? await setBox3(char) :
                box4.value === "" ? await setBox4(char) :
                box5.value === "" ? await setBox5(char) : "";

            setQtSelected(qtSelected + 1);
            console.log(qtSelected);

            if(qtSelected === (limit - 1)){
                const result = box1.value + box2.value + box3.value + box4.value + char.value;                
                
                if(result === correctWord)
                setTimeout(() => navigate('../palavras/endPalavras'), 500);
            }
        }
    };

    const handleCharRemoval = (boxNumber) => {
        switch(boxNumber) {
            case 0:
                resetCard(box1);
                setBox1({value: "", selected: false, id: null});
                break;
            case 1:
                resetCard(box2);
                setBox2({value: "", selected: false, id: null});
                break;
            case 2:
                resetCard(box3);
                setBox3({value: "", selected: false, id: null});
                break;
            case 3:
                resetCard(box4);
                setBox4({value: "", selected: false, id: null});
                break;
            case 4:
                resetCard(box5);
                setBox5({value: "", selected: false, id: null});
                break;
        }
        
        if(qtSelected > 0) setQtSelected(qtSelected - 1);
    };

    const resetCard = (box) => {
        setCharsToChoose(cards => {
            return cards.map(card => {
                if(card.id === box.id){
                    return {...card, selected: false}
                } else return card
            })
        });
    };

    return (
        <Background>
            <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
            <Ligth style={{left: "3vw", top: "7vh"}}/>
            <Ligth style={{left: "70vw", top: "25vh"}}/>
            <BottomLigth />
            <Link to="/">
                <Return src={returnIcon} />
            </Link>
            <Title>
                {"Dekōdo".toUpperCase()}
            </Title>
            <CardGrid>
                {correctWord.split("").map((char, index) => (
                   <Card 
                        className= {
                            index === 0 ? qtSelected === limit && box1.value !== char ? "wrong" : "" :
                            index === 1 ? qtSelected === limit && box2.value !== char ? "wrong" : "" :
                            index === 2 ? qtSelected === limit && box3.value !== char ? "wrong" : "" :
                            index === 3 ? qtSelected === limit && box4.value !== char ? "wrong" : "" :
                            index === 4 ? qtSelected === limit && box5.value !== char ? "wrong" : "" : ""
                        }
                        correctValue={char} 
                        key={Math.random()}
                        onClick={e => handleCharRemoval(index)}
                    >
                    {
                        index === 0 ? box1.value :
                        index === 1 ? box2.value :
                        index === 2 ? box3.value :
                        index === 3 ? box4.value :
                        index === 4 ? box5.value : ""    
                    }
                    </Card>
                ))}
            </CardGrid>
            <CharCardGrid>
                {charsToChoose.map((char, index) => (
                    <CharCard 
                        className={char.selected ? "selected" : ""}
                        key={Math.random()}
                        onClick={e => handleCharSelection(char, index)}
                    >
                        {char.value}
                    </CharCard>
                ))}
            </CharCardGrid>
            <Image src={Arara}/>
        </Background>
    );
};

export default Palavras;
