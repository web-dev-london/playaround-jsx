import { Container, Heading, Text } from "@chakra-ui/react";
import UseFetchHook from "./UseFetchHook";

const Test = () => {
    const { data, error, pending } = UseFetchHook('https://dummyjson.com/products');

    const products = data && data.products && data.products.length > 0
        && data.products.map((item) => {
            return (
                <Text
                    as={'p'}
                    key={item.id}
                >
                    {item.title}
                </Text>
            )
        })

    const loading = pending && <Text
        as={'p'}
    >
        Please wait data is loading...
    </Text>

    const errorMsg = error && <Text
        as={'p'}
    >
        Sorry, an Error Occured.
    </Text>

    return (
        <>
            {errorMsg}
            {loading}
            <Container
                maxW={'xl'}
            >
                <Heading
                    fontSize={'20px'}
                >
                    Use Fetch Hook Example!
                </Heading>
                {products}
            </Container>
        </>
    );
}

export default Test;