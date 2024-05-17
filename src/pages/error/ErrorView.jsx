import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

const ErrorView = () => {
    const error = useRouteError()
    return (
        <>
            <Container
                maxW={'7xl'}
            >
                <Box
                    p={'2rem'}
                >
                    <Heading
                        fontSize={'24px'}
                    >
                        Oops!
                    </Heading>
                    <Text
                        as={'p'}
                        fontSize={'18px'}
                    >
                        Sorry, an unexpected error has occured.
                    </Text>
                    <Text>{error.statusText || error.message}</Text>
                </Box>
            </Container>
        </>
    );
}

export default ErrorView;