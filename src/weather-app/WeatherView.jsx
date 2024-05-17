import { Box, Container, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import './styles.css';


const WeatherView = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState();


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=48861af6068117b1d88eab5250c80db6`

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const fetchData = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
            })
            setSearch('')
        }
    }

    const celsius = () => {
        const fahrenheit = data && data.main.temp;
        const celsius = (fahrenheit - 32) * 5 / 9;
        return celsius.toFixed();
    }


    const city = data ? data.name : null;
    const country = data ? data.sys.country : null;
    const temprature = data ? <Text>{celsius()}°C</Text> : null;
    const weatherMain = data ? data.weather[0].main : null;
    const feels = data ? <Text>{data.main.feels_like.toFixed()}°F</Text> : null;
    const humidity = data ? <Text>{data.main.humidity}%</Text> : null;
    const wind = data ? <Text>{data.wind.speed.toFixed()}MPH</Text> : null;

    return (
        <>
            <Box
                className="backgroud"
            >
                <Container
                    maxW={'lg'}
                    className={'weather-view'}
                >

                    <Input
                        type={'text'}
                        value={search}
                        onChange={handleInputChange}
                        onKeyDown={fetchData}
                        placeholder="Enter Location"
                    />

                    <Box
                        className={'top'}
                    >
                        <Box
                            className={'location'}
                        >
                            <Box
                                fontSize={'22px'}
                            >
                                {city}
                                <Text
                                    ml="1rem"
                                    as={'span'}>
                                    {country}
                                </Text>
                            </Box>
                        </Box>
                        <Box
                            className={'temp'}
                        >
                            <Heading
                                fontSize={'50px'}
                            >
                                {temprature}
                            </Heading>
                        </Box>
                        <Box
                            className={'description'}
                        >
                            <Text
                            >
                                {weatherMain}
                            </Text>
                        </Box>
                    </Box>

                    {data && data.name && <Box
                        className={'bottom'}
                    >
                        <Box
                            className={'feels'}
                        >
                            <Heading
                                fontSize={'18px'}
                                className="bold"
                            >
                                {feels}
                            </Heading>
                            <Text>Tempreture</Text>
                        </Box>
                        <Box
                            className={'humidity'}
                        >
                            <Heading
                                fontSize={'18px'}
                                className="bold"
                            >
                                {humidity}
                            </Heading>
                            <Text>Humidity</Text>
                        </Box>
                        <Box
                            className={'wind'}
                        >
                            <Heading
                                fontSize={'18px'}
                                className="bold"
                            >
                                {wind}
                            </Heading>
                            <Text>Winds</Text>
                        </Box>
                    </Box>}

                </Container>
            </Box>
        </>
    );
}

export default WeatherView;