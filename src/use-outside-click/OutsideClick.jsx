import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import useOutsideClickHook from "./useOutsideClickHook";

const OutsideClick = () => {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef()

    const handleClickOutside = () => {
        setShowContent(false)
        console.log('ouside');
    }


    useOutsideClickHook(ref, handleClickOutside);

    const contents = showContent
        ? <Box
            as={'div'}
            textAlign={'center'}
            mt={'2rem'}
            border={'1px solid'}
            borderColor={'blue'}
            p={'1rem'}
            borderRadius={'5px'}
            ref={ref}
        >
            <Heading
                as={'h1'}
                fontSize={'20px'}
                mb={'1rem'}
            >
                This is the content
            </Heading>
            <Text as={'p'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed officia eum soluta eveniet, praesentium eius ea nemo et itaque labore aperiam perspiciatis non, optio laborum deserunt vel cum. Libero, dolore?
                Mollitia quia cumque est asperiores nobis eos enim possimus amet, dicta ipsam quod, officiis earum optio qui obcaecati a facilis voluptatibus modi. Distinctio rem itaque ipsam, vitae ad delectus nesciunt. </Text>
        </Box>
        : <Button
            onClick={() => setShowContent(true)}
        >
            Show
        </Button>

    return (
        <>
            <Container
                maxW={'xl'}
            >
                <Box
                    as={'div'}
                >
                    {contents}
                </Box>
            </Container>
        </>
    );
}

export default OutsideClick;