import { Container, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import { GameState } from "./utils/GameState";
import Reset from "./Reset";
import draw from '../sounds/sounddraw.wav';
import click from '../sounds/soft-click.wav';
import win from '../sounds/soundwon.wav';
import unlock from '../sounds/unlock.wav';



const soundWin = new Audio(win);
soundWin.volume = 0.5;
const soundDraw = new Audio(draw);
soundDraw.volume = 0.4;
const clickSound = new Audio(click);
clickSound.volume = 0.5;
const soundUnlock = new Audio(unlock);
soundUnlock.volume = 0.5;

const player_x = 'X';
const player_o = 'O';

const winningCombinations = [
    //Rows
    { combo: [0, 1, 2], classStrike: 'strike-row-1' },
    { combo: [3, 4, 5], classStrike: 'strike-row-2' },
    { combo: [6, 7, 8], classStrike: 'strike-row-3' },
    //Columns
    { combo: [0, 3, 6], classStrike: 'strike-column-1' },
    { combo: [1, 4, 7], classStrike: 'strike-column-2' },
    { combo: [2, 5, 8], classStrike: 'strike-column-3' },
    //Diagonals
    { combo: [0, 4, 8], classStrike: 'strike-diagonal-1' },
    { combo: [2, 4, 6], classStrike: 'strike-diagonal-2' },
]

const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(player_x);
    const [classStrike, setClassStrike] = useState();
    const [gameState, setGameState] = useState(GameState.inProgress);

    const handleTileClick = (index) => {
        if (gameState !== GameState.inProgress) {
            return;
        }
        if (tiles[index] !== null) {
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = player;
        setTiles(newTiles);
        if (player === player_x) {
            setPlayer(player_o);
        } else {
            setPlayer(player_x);
        }
    }

    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayer(player_x);
        setClassStrike(null);
        soundUnlock.play();
    }


    const checkWinner = (tiles, setClassStrike, setGameState) => {
        for (const { combo, classStrike } of winningCombinations) {
            const tileValue1 = tiles[combo[0]];
            const tileValue2 = tiles[combo[1]];
            const tileValue3 = tiles[combo[2]];
            if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
                setClassStrike(classStrike);
                if (tileValue1 === player_x) {
                    setGameState(GameState.playerXWins);
                } else {
                    setGameState(GameState.playerOWins);
                }
                return;
            }
        }

        const areAllTilesFilledIn = tiles.every((tile) => {
            return tile !== null;
        })
        if (areAllTilesFilledIn) {
            setGameState(GameState.draw);
        }
    }


    useEffect(() => {
        checkWinner(tiles, setClassStrike, setGameState)
    }, [tiles])

    useEffect(() => {
        if (tiles.some((tile) => tile !== null)) {
            clickSound.play();
        }
    }, [tiles])

    useEffect(() => {
        if (gameState === GameState.draw) {
            soundDraw.play()
        }
    }, [gameState])

    useEffect(() => {
        if (gameState === GameState.playerOWins || gameState === GameState.playerXWins) {
            soundWin.play()
        }
    }, [gameState])

    return (
        <>
            <Container
                maxW={'lg'}
            >
                <Heading
                    as={'h2'}
                    fontSize={'24px'}
                    mb={'2rem'}
                >
                    Tic Tac Toe
                </Heading>
                <HStack
                    spacing={'3rem'}
                    alignItems={'self-start'}
                >
                    <Board
                        tiles={tiles}
                        player={player}
                        classStrike={classStrike}
                        handleTileClick={handleTileClick}
                    />
                    <VStack
                        rowGap={'1.5rem'}
                    >
                        <GameOver gameState={gameState} />
                        <Reset gameState={gameState} handleReset={handleReset} />
                    </VStack>
                </HStack>
            </Container>
        </>
    )
}

export default TicTacToe


