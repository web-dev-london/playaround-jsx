import { Box } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import './styles.css';

const Strike = ({ classStrike }) => {
    return (
        <>
            <Box
                as={'div'}
                className={`strike ${classStrike}`}
            >
            </Box>
        </>
    );
}
Strike.propTypes = {
    classStrike: PropTypes.string,
}
export default Strike;
