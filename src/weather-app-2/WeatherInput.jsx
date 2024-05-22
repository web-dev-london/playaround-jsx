import { Box, Input } from "@chakra-ui/react";
import { PropTypes } from 'prop-types';

const WeatherInput = ({ city, handleChange, handleFormSubmit }) => {

    return (
        <>
            <Box

            >
                <form
                    style={{
                        display: 'flex'
                    }}
                    onSubmit={handleFormSubmit}
                >
                    <Input
                        type="text"
                        placeholder="Enter a city"
                        value={city}
                        onChange={handleChange}
                    />
                </form>
            </Box>
        </>
    );
}

WeatherInput.propTypes = {
    data: PropTypes.object,
    city: PropTypes.string,
    handleChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
}

export default WeatherInput;