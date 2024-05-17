import { Box, Stack } from "@chakra-ui/react";
import Strike from "./Strike";
import Tile from "./Tile";
import { PropTypes } from 'prop-types';
import './styles.css'

const Board = ({ tiles, handleTileClick, player, classStrike }) => {
    return (
        <>
            <Stack
                as={'div'}
                className={'board'}
                gap={0}
                mb={'1rem'}
            >
                <Box
                >
                    <Tile player={player} value={tiles[0]} onClick={() => handleTileClick(0)} />
                    <Tile player={player} value={tiles[1]} onClick={() => handleTileClick(1)} />
                    <Tile player={player} value={tiles[2]} onClick={() => handleTileClick(2)} />
                </Box>
                <Box
                >
                    <Tile player={player} value={tiles[3]} onClick={() => handleTileClick(3)} />
                    <Tile player={player} value={tiles[4]} onClick={() => handleTileClick(4)} />
                    <Tile player={player} value={tiles[5]} onClick={() => handleTileClick(5)} />
                </Box>
                <Box
                >
                    <Tile player={player} value={tiles[6]} onClick={() => handleTileClick(6)} />
                    <Tile player={player} value={tiles[7]} onClick={() => handleTileClick(7)} />
                    <Tile player={player} value={tiles[8]} onClick={() => handleTileClick(8)} />
                </Box>
                <Strike classStrike={classStrike} />
            </Stack>
        </>
    );
}

Board.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleTileClick: PropTypes.func.isRequired,
    player: PropTypes.string.isRequired,
    classStrike: PropTypes.string
}

export default Board;