import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import { PropTypes } from 'prop-types'

const Tabs = ({ content, tabIndex, handleClick }) => {

    const tabs = content.map((item, index) => {
        const bgColor = tabIndex === index ? 'teal' : '';
        const labelColor = tabIndex === index ? 'white' : '';


        return (
            <Box
                key={item.id}
                p={2}
                borderRadius={'5px'}
                backgroundColor={`${bgColor}`}
                color={`${labelColor}`}
                onClick={() => handleClick(index)}
            >
                <Text
                    as={'span'}
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    {item.label}
                </Text>
            </Box>
        )
    })

    const contents = content[tabIndex] && content[tabIndex].content

    return (
        <>
            <Stack>
                <HStack
                >
                    {tabs}
                </HStack>
                <Box
                >
                    {contents}
                </Box>

            </Stack>
        </>
    )
}

Tabs.propTypes = {
    content: PropTypes.array,
    handleClick: PropTypes.func,
    tabIndex: PropTypes.number,
}

export default Tabs