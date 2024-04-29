import { tabItems } from './data';
import Tabs from '../custom-tabs/Tabs';
import { useState } from 'react';
import { Container } from '@chakra-ui/react';

const Tab = () => {
    const [tabIndex, setTabIndex] = useState(0)


    const handleClick = (currentIndex) => {
        setTabIndex(currentIndex)
    }

    return (
        <>
            <Container
                p={'10px'}
                maxW={'4xl'}
            >
                <Tabs
                    content={tabItems}
                    handleClick={handleClick}
                    tabIndex={tabIndex}
                />
            </Container>
        </>
    )
}

export default Tab