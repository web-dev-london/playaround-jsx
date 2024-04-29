import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { url } from "./fetch";


const ScrollIndicator = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [scroll, setScroll] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            response.json().then(data => {
                if (data && data.products && data.products.length > 0) {
                    setData(data.products)
                    setLoading(false)
                }
            })
        } catch (error) {
            console.log(error);
            setErrorMsg(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleScroll = () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScroll((scrollTop / height) * 100)
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const products = data && data.length > 0
        ? data.map((product) => {
            return (
                <Text
                    key={product.id}
                    as={'p'}
                >
                    {product.title}
                </Text>
            )
        }) : null

    const loadingMsg = loading && <p>Please wait loading data...</p>;
    const errMsg = errorMsg && <p>Sorry, error occured.</p>

    return (
        <>
            {loadingMsg}
            {errMsg}
            <Stack
                style={
                    {
                        paddingTop: '20px',
                        position: 'fixed',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: 'rgb(0,185,37)'
                    }}
            >
                <Heading
                    as={'h1'}
                    fontSize={'24px'}
                    mb={'2rem'}
                    color={'white'}
                >
                    Custom Scroll Indicator
                </Heading>
                <Box
                    as={'div'}
                    style={
                        {
                            width: '100%',
                            height: '5px',
                            background: '#aaf900'
                        }
                    }
                >
                    <Box
                        className="scroll-bar"
                        style={{
                            width: `${scroll}%`,
                            height: '5px',
                            transition: 'all .5s',
                            backgroundColor: 'blueviolet'
                        }}
                    >

                    </Box>
                </Box>

            </Stack>
            <Box
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                mt={'8rem'}
                mb={'2rem'}
            >
                {products}
            </Box>
        </>
    )
}



export default ScrollIndicator
