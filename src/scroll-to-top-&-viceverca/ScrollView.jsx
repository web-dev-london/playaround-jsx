import { Button, Container, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import UseFetchHook from '../use-fetch/UseFetchHook'
import { useRef } from "react";

const ScrollView = () => {
    const { data, error, pending } = UseFetchHook('https://dummyjson.com/products?limit=100');
    const refBottom = useRef(null)


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleScrollToBottom = () => {
        refBottom.current.scrollIntoView({ behavior: 'smooth' })
    }


    const listOfProducts = data && data.products && data.products.length > 0
        ? data.products.map((product) => {
            return (
                <ListItem
                    key={product.id}
                >
                    {product.title}
                </ListItem>
            )
        })
        : null;


    const loading = pending && <Text
        as={'p'}
    >
        Loading... Please wait.
    </Text>

    const errorMsg = error && <Text
        as={'p'}
    >
        Sorry, Error Occured.
    </Text>

    return (
        <>
            {loading}
            {errorMsg}
            <Container
                maxW={'xl'}
            >
                <Heading
                    as={'h1'}
                    fontSize={'22px'}
                >
                    Scroll To Top and Bottom Feature.
                </Heading>
                <Text
                    fontSize={'18px'}
                    mt={'1rem'}
                    mb={'1rem'}
                >
                    This is the Top one.
                </Text>

                <Button
                    onClick={handleScrollToBottom}
                    colorScheme="cyan"
                >
                    Scroll to Bottom
                </Button>
                <UnorderedList
                    mt={'2rem'}
                    mb={'2rem'}
                >
                    {listOfProducts}
                </UnorderedList>
                <Button
                    colorScheme="yellow"
                    onClick={handleScrollToTop}
                >
                    Scroll to Top
                </Button>
                <Text
                    ref={refBottom}
                    fontSize={'18px'}
                    mt={'1rem'}
                    mb={'1rem'}
                >
                    This is the Bottom one.
                </Text>
            </Container>
        </>
    );
}

export default ScrollView;