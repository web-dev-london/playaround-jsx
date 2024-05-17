import { Text, Box, HStack, Stack, Heading } from '@chakra-ui/react'
import { PropTypes } from 'prop-types';


const WeatherDiscriptsView = ({ weather }) => {

    const fahrenheit = weather && weather.main.temp;
    const celsius = (fahrenheit - 32) * 5 / 9;

    const temperature = weather && <Heading>{celsius.toFixed()}°C</Heading>
    const city = weather && <Text fontSize={'1.5rem'} >{weather.name}</Text>
    const country = weather && <Text as={'span'}>{weather.sys.country}</Text>
    const description = weather && <Text fontSize={'18px'}>{weather.weather[0].main}</Text>
    const toFahrenheit = weather && <Text>{weather.main.temp.toFixed()}</Text>
    const humidity = weather && <Text>{weather.main.humidity}%</Text>
    const winds = weather && <Text>{weather.wind.speed}MPH</Text>
    const pressure = weather && <Text>{weather.main.pressure}hPa</Text>
    return (
        <>
            <Stack
                my={'2rem'}
                minH={'350px'}
                width={'100%'}
                spacing={5}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-between'}
            >
                <HStack
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Box>
                            {temperature}
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            columnGap={'.5rem'}
                        >
                            {city}
                            {country}
                        </Box>
                    </Box>
                    <Box>
                        {description}
                    </Box>
                </HStack>
                {weather && weather.name
                    && <HStack
                        justifyContent={'space-between'}

                    >
                        <Box
                            style={inlineStyles}
                        >
                            {toFahrenheit}
                            <Text>°F</Text>
                        </Box>
                        <Box
                            style={inlineStyles}
                        >
                            {humidity}
                            <Text>Humidity</Text>
                        </Box>
                        <Box
                            style={inlineStyles}
                        >
                            {winds}
                            <Text>Winds</Text>
                        </Box>
                        <Box

                            style={inlineStyles}
                        >
                            {pressure}
                            <Text>Pressure</Text>
                        </Box>

                    </HStack>}
            </Stack>
        </>
    );
}

const inlineStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

WeatherDiscriptsView.propTypes = {
    weather: PropTypes.object,
    main: PropTypes.object,
    temp: PropTypes.number,
}

export default WeatherDiscriptsView;