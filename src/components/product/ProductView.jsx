import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    Button,
    ButtonGroup
} from "@chakra-ui/react";
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../../store/slice/card-slice";
// clearCard, removeCard 

const ProductView = ({ product }) => {
    const dispach = useDispatch();
    const { card } = useSelector(state => state);

    const handleAddCard = () => {
        dispach(addCard(product))
    }

    const handleRemoveCard = () => {
        dispach(removeCard(product.id))

    }

    // const handleClearCard = () => {
    //     dispach(clearCard())
    // }

    const addOrRemove = card.some((item) => item.id === product.id)
        ? 'Remove from cart' : 'Add to cart'

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={product.image}
                        alt={product.title}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{product.title}</Heading>
                        <Text>
                            {product.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${product.price}
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
                            variant='ghost'
                            colorScheme='blue'
                            onClick={card.some((item) => item.id === product.id) ? handleRemoveCard : handleAddCard}
                        >
                            {addOrRemove}
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
}
ProductView.propTypes = {
    product: PropTypes.object
}
export default ProductView;