import { Badge, Button, Card, CardBody, Container, Heading, Image, Stack } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeView = ({ item }) => {

    return (
        <>
            <Container
                maxW={'7xl'}
            >
                <Card
                    maxW='sm'
                >
                    <CardBody
                    >
                        <Image
                            w={'100%'}
                            h={'300px'}
                            src={item.image_url}
                            alt='Recipe Item'
                            borderRadius='lg'
                            objectFit={'cover'}
                        />
                        <Stack mt='6' spacing='3'>

                            <Badge
                                p={'10px 20px'}
                                borderRadius={'4px'}

                                textAlign={'center'}
                                colorScheme={'green'}
                            >
                                {item.publisher}
                            </Badge>
                            <Heading size='md'>{item.title}</Heading>
                            <Link to={`/detailview/${item?.id}`}> <Button colorScheme='blue'>View Recipe</Button></Link>
                        </Stack>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}
RecipeView.propTypes = {
    item: PropTypes.object,
}
export default RecipeView;




