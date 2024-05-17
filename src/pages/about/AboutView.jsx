import { Box, useColorModeValue, Container } from "@chakra-ui/react";
import NavigationView from "../../navigation-bar/NavigationView";

const AboutView = () => {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}
            >
                <NavigationView />
            </Box>
            <Container
                maxW={'7xl'}
            >
                About Us Component.
            </Container>
        </>
    );
}

export default AboutView;