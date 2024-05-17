import { Button } from "@chakra-ui/react";
import { GameState } from "./utils/GameState";
import { PropTypes } from 'prop-types';

const Reset = ({ gameState, handleReset }) => {

    if (gameState === GameState.inProgress) {
        return;
    }

    return (
        <>
            <Button
                colorScheme="blue"
                onClick={handleReset}
            >
                Reset Game
            </Button>
        </>
    );
}

Reset.propTypes = {
    gameState: PropTypes.number.isRequired,
    handleReset: PropTypes.func.isRequired,
}

export default Reset;