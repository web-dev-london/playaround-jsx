import { Box, Container, Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchView from './SearchView';

const SearchAutocomplete = () => {
    const [recipes, setRecipes] = useState('');
    const [recipesData, setRecipesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [findItem, setFindItem] = useState([]);


    const handleInputChange = (e) => {
        const query = e.target.value.toLowerCase()
        setRecipes(query);
        if (query.length > 1) {
            const filteredItem = recipesData
                && recipesData.length
                ? recipesData.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFindItem(filteredItem);
        }
    }

    const hanldeItemClick = (e) => {
        setRecipes(e.target.innerText);
        setFindItem([])
    }


    const fetchListOfRecipes = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();
            if (data && data.recipes && data.recipes.length) {
                setRecipesData(data.recipes.map(item => item.name));
                setLoading(false)
                setErrorMsg(null)
            }
        } catch (e) {
            setLoading(false)
            let message;
            if (e instanceof Error)
                message = e.message
            else message = String(message)
            setErrorMsg(message)
        }
    }

    useEffect(() => {
        fetchListOfRecipes()
    }, [])

    const errorMessage = errorMsg
        && <Text
            as={'p'}
        >
            Sorry, Error Occured...
        </Text>

    const loadingMessage = loading
        && <Text
            as={'p'}
        >
            Please wait, data is loading...
        </Text>

    return (
        <>
            {loadingMessage}
            {errorMessage}
            <Container
                textAlign={'center'}
            >
                <Box
                    p={'1rem'}
                >
                    <Input
                        size={'md'}
                        maxW={'25rem'}
                        type={'text'}
                        placeholder={'Search...'}
                        value={recipes}
                        onChange={handleInputChange}
                    />
                </Box>
                <SearchView
                    view={findItem}
                    handleItemClick={hanldeItemClick}
                />
            </Container>
        </>
    )
}

export default SearchAutocomplete