import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";


const selectSection = [
    {
        label: 'First Card',
        style: {
            width: '100%',
            padding: '16px',
            height: '450px',
            backgroundColor: 'orange'
        }
    },
    {
        label: 'Second Card',
        style: {
            width: '100%',
            padding: '16px',
            height: '450px',
            backgroundColor: 'purple'
        }
    },
    {
        label: 'Third Card',
        style: {
            width: '100%',
            padding: '16px',
            height: '450px',
            backgroundColor: 'gold'
        }
    },
    {
        label: 'Fourth Card',
        style: {
            width: '100%',
            padding: '16px',
            height: '450px',
            backgroundColor: 'tomato'
        }
    },
    {
        label: 'Fifth Card',
        style: {
            width: '100%',
            padding: '16px',
            height: '450px',
            backgroundColor: 'teal'
        }
    },
]

const ScrollSection = () => {
    const ref = useRef()


    const handleScrollSection = () => {
        let position = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }


    const selections = selectSection.map((select, index) => {
        return (
            <Box
                key={index}
                as={'div'}
                ref={index === 4 ? ref : null}
                style={select.style}
                my={'1rem'}
            >
                <Text
                    fontSize={'18px'}
                    fontWeight={'bold'}
                >
                    {select.label}
                </Text>
            </Box>
        )
    })

    return (
        <>
            <Container
                maxW={'lg'}
            >
                <Heading
                    as={'h2'}
                    fontSize={'20px'}
                >
                    Scroll to a particullar section
                </Heading>
                <Button
                    my={'1rem'}
                    colorScheme="cyan"
                    onClick={handleScrollSection}
                >
                    Click to Scroll
                </Button>
                {selections}
            </Container>
        </>
    );
}

export default ScrollSection;