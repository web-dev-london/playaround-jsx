import { Box, Container, useColorModeValue, Text, Grid } from "@chakra-ui/react";
import NavigationView from "../../navigation-bar/NavigationView";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeView from "../../recipe-item/RecipeView";

const FavoriteView = () => {

    const { favorite } = useContext(GlobalContext);

    const recipesView = favorite && favorite.length > 0 ?
        favorite.map((recipe, index) => {
            return (
                <RecipeView key={index} item={recipe} />
            )
        }) : <Text
            fontSize={'20px'}
            fontWeight={'bold'}
            textAlign={'center'}
        >
            Did not add to Favorite.
        </Text>


    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}
            >
                <NavigationView />
            </Box>
            <Container
                maxW={'7xl'}
                py={'2rem'}
            >
                <Grid
                    templateColumns={'repeat(3, 1fr)'}
                    rowGap={7}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {recipesView}
                </Grid>
            </Container>
        </>
    );
}

export default FavoriteView;