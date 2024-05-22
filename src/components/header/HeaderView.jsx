import { Heading, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeaderView = () => {
    return (
        <>
            <HStack
                as="nav"
                justifyContent={'space-between'}
                p={4}
            >
                <Link to='/'>
                    <Heading
                        fontSize={'20px'}
                    >
                        logo
                    </Heading>
                </Link>
                <UnorderedList
                    display={'flex'}
                    listStyleType={'none'}
                    gap={5}
                    fontWeight={'bold'}
                >
                    <Link to={'/'}
                    >
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link to={'/card'}
                    >
                        <ListItem>Card</ListItem>
                    </Link>
                </UnorderedList>
            </HStack>
        </>
    );
}

export default HeaderView;