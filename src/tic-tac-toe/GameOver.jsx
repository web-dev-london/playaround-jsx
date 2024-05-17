import { Text } from "@chakra-ui/react";
import { GameState } from "./utils/GameState";
import { PropTypes } from 'prop-types';
import './styles.css'

const GameOver = ({ gameState }) => {
    switch (gameState) {
        case GameState.inProgress:
            return <></>
        case GameState.playerOWins:
            return <Text
                as={'p'}
                className={'game-over'}
            >
                player: O Won
            </Text>;
        case GameState.playerXWins:
            return <Text
                as={'p'}
                className={'game-over'}
            >
                player: X Won
            </Text>;
        case GameState.draw:
            return <Text
                as={'p'}
                className={'game-over'}
            >
                Draw
            </Text>
        default:
            break;
    }
}
GameOver.propTypes = {
    gameState: PropTypes.number,
}
export default GameOver;