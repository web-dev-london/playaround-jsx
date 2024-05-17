import { Container, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import WeatherDiscriptsView from "./WeatherDescriptionsView";
import WeatherInput from "./WeatherInput";

const WeatherView = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData(city)
    }

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    const fetchWeatherData = async (search) => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=48861af6068117b1d88eab5250c80db6`)
            const data = await response.json();
            if (data) {
                setData(data)
                setLoading(false)
            }
        } catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message
            else message = String(message);
            setError(message)
            setLoading(false)
        }
    }

    const loadingMsg = loading && <Text>Please wait, data is loading...</Text>
    const errorMsg = error && <Text>Sorry, Error Occured.</Text>
    return (
        <>
            <Box

            >
                {loadingMsg}
                {errorMsg}
                <Container
                    maxW={'xl'}
                    bgColor={'gold'}
                    py={'16px'}
                    borderRadius={'5px'}
                >
                    <WeatherInput
                        city={city}
                        weather={data}
                        handleChange={handleInputChange}
                        handleFormSubmit={handleSubmit}
                    />
                    <WeatherDiscriptsView
                        weather={data}
                    />
                </Container>
            </Box>
        </>
    );
}

export default WeatherView;

