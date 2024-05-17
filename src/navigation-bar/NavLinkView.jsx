import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';



const NavLinkView = (prop) => {
    const { children } = prop;
    return (
        <>
            <ChakraLink
                as={ReactRouterLink}

                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                }}
            // to={'/'}
            >
                {children}
            </ChakraLink>
        </>
    );
}

export default NavLinkView;