import { Button } from "@chakra-ui/react";
import { PropTypes } from 'prop-types';
import './styles.css'

const Tile = ({ value, onClick, player }) => {
    let hoverClass = null;
    if (value === null && player !== null) {
        hoverClass = `${player.toLowerCase()}-hover`
    }

    return (
        <>
            <Button
                onClick={onClick}
                className={[`square ${hoverClass}`]}
            >
                {value}
            </Button>
        </>
    );
}

Tile.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    player: PropTypes.string
}

export default Tile;