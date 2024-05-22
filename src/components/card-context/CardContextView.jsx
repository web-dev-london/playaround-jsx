import {
    Image,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    ButtonGroup,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../store/slice/card-slice";
import { PropTypes } from "prop-types";



const CardContextView = ({ item }) => {
    console.log(item);
    const dispatch = useDispatch()
    const handleRemoveCard = () => {
        dispatch(removeCard(item.id))
    }

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={item.image}
                        alt={item.title}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            {item.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${item.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button
                            onClick={handleRemoveCard}
                            variant='ghost' colorScheme='blue'>
                            Remove Card
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
}
CardContextView.propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    item: PropTypes.object
}

export default CardContextView;