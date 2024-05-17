
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { PropTypes } from 'prop-types';
import laptop from './img/labtop.jpg'


const ModalContent = ({ handleToggleModal }) => {

    return (
        <>
            <Stack
                onClick={handleToggleModal}
                backgroundColor={'rgba(0,0,0,0.5)'}
                textAlign={'center'}
                p={4}
                position={'fixed'}
                w={'100%'}
                h={'80%'}
            >
                <HStack
                    maxW={'70%'}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Box
                    >
                        <Image
                            w={'300px'}
                            h={'200px'}
                            src={laptop}
                            alt="Laptop on the Table"
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        flexDir={'row-reverse'}
                        justifyContent={'space-between'}
                        maxW={'50%'}
                    >

                        <IconButton
                            colorScheme='gray'
                            aria-label='Search database'
                            onClick={handleToggleModal}
                            icon={<CloseIcon />}
                        />

                        <Box
                        >
                            <Heading
                                fontSize={'2rem'}
                                color={'white'}
                            >
                                MacBook Air
                            </Heading>
                            <Text
                                as={'p'}
                                color={'white'}
                            >
                                The MacBook Air is a line of laptop computers developed and manufactured by Apple since 2008. It features a thin, light structure in a machined aluminum case and currently either a 13-inch or 15-inch screen.
                            </Text>
                        </Box>
                    </Box>
                </HStack>
            </Stack>
        </>
    )
}

ModalContent.propTypes = {
    handleToggleModal: PropTypes.func,
}

export default ModalContent