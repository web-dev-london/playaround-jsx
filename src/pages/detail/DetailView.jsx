import { Badge, Box, Button, Card, CardBody, CardFooter, Container, Heading, Image, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import NavigationView from "../../navigation-bar/NavigationView";

const DetailView = () => {
    const { detailsData, setDetailsData, handleLinkToFavorite, favorite } = useContext(GlobalContext);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            response.json().then(data => {
                if (data.data) {
                    setDetailsData(data.data)
                }
                console.log(data.data);
            })
        }
        fetchData()
    }, [id, setDetailsData])


    const itemIngredients = detailsData?.recipe.ingredients
        && detailsData.recipe.ingredients.map((ingredient, index) => {
            return (
                <ListItem key={index}>
                    <Text
                        as={'span'}
                    >
                        {ingredient.quantity} {ingredient.unit}
                    </Text>
                    <Text
                        as={'span'}
                    >
                        {ingredient.description}
                    </Text>
                </ListItem>
            )
        })


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
            >

                <Card
                    my={7}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    justifyContent={'space-between'}
                    w={'100%'}
                    maxW={'73%'}
                >
                    <Image
                        objectFit='fit'
                        maxW={{ base: '100%', sm: '55%' }}
                        src={detailsData?.recipe.image_url}
                        alt={detailsData?.recipe.title}
                    />

                    <Stack>
                        <CardBody
                        >
                            <Text
                                as={'span'}
                            >
                                <Badge
                                    p={'10px 20px'}
                                    borderRadius={'4px'}
                                    colorScheme="green"
                                >
                                    {detailsData?.recipe.publisher}
                                </Badge>
                            </Text>
                            <Heading
                                size='md'
                                mt={['10px', '14px']}
                            >
                                {detailsData?.recipe.title}
                            </Heading>
                            <UnorderedList py='2' styleType={"-"} >
                                {itemIngredients}
                            </UnorderedList>
                        </CardBody>

                        <CardFooter>
                            <Button
                                variant='solid'
                                colorScheme='blue'
                                onClick={() => handleLinkToFavorite(detailsData?.recipe)}

                            >
                                {favorite && favorite.length > 0 && favorite.findIndex(item => item.id === detailsData?.recipe.id) !== -1 ? 'Remove from Favorites' : 'Add to Favorites'}
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>

            </Container >
        </>
    );
}

export default DetailView;