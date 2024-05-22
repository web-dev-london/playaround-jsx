import HeaderView from "../../components/header/HeaderView";
import { useEffect, useState } from "react";
import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import ProductView from "../../components/product/ProductView";

const HomeView = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const fetchListOfProducts = async () => {
        try {
            setLoading(true)
            setError('')
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setLoading(false)
            if (data) {
                setProducts(data)
            } else {
                setError('No products found')
            }
        } catch (error) {
            setLoading(false)
            if (error instanceof Error) {
                setError(error.message || 'An error occured.')
            }
        }
    }


    useEffect(() => {
        fetchListOfProducts()
    }, [])

    const loadingSpinner = loading ? <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
    >
        <Circles
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="circles-loading"
            visible={true}
        />
    </Box>
        : <Grid
            templateColumns={'repeat(3,1fr)'}
            gap={5}
        >
            {products && products.length > 0 && products.map((product, index) => {
                return (
                    <ProductView
                        key={index}
                        product={product}
                    />
                )
            }
            )}
        </Grid>

    const errorMsg = error && <Text>Sorr, unexpected an error occured.</Text>
    return (
        <>
            {errorMsg}
            <Box
                borderBottom={'1px solid'}
                borderColor={'gray'}
                marginBottom={'2rem'}
            >
                <Container
                    maxW={'7xl'}
                >
                    <HeaderView />
                </Container>
            </Box>
            <Container
                maxW={'7xl'}
            >
                {loadingSpinner}
            </Container>
        </>
    );
}

export default HomeView;