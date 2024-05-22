import { useSelector } from "react-redux";
import HeaderView from "../../components/header/HeaderView";
import { useEffect, useState } from "react";
import { Box, Heading, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import CardContextView from '../../components/card-context/CardContextView';
import { Text, Grid } from '@chakra-ui/react';

const CardView = () => {
    const [totalCard, setTotalCard] = useState(0);
    const { card } = useSelector((state) => state);
    console.log(card);



    useEffect(() => {
        function calculateCard() {
            const total = card.reduce((result, current) => result + current.price, 0);
            setTotalCard(total);
        }
        calculateCard()
    }, [card])

    console.log(card, totalCard);
    return (
        <>
            <HeaderView />
            {card && card.length ?
                (<>
                    <Box>
                        <Grid templateColumns={'repeat(3, 1fr)'} gap={3}>
                            {card.map((card, index) => {
                                return (
                                    <CardContextView
                                        key={index}
                                        item={card}
                                    />
                                )
                            })}
                        </Grid>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'end'}
                        p={4}
                    >
                        <Heading
                            fontSize={'22px'}
                        >Card Summary</Heading>
                        <Text>
                            <Text as={'span'}>Total Item</Text>
                            <Text as={'span'}>{card.length}</Text>
                        </Text>
                        <Text>
                            <Text as={'span'}>Total Amount: </Text>
                            <Text as={'span'}>{totalCard}</Text>
                        </Text>
                    </Box>
                </>) : (<Box
                    display="flex"
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Heading
                        fontSize={'22px'}
                    >No Card</Heading>
                    <NavLink to={'/'}
                    >
                        <Button color="gray">Shop now</Button>
                    </NavLink>
                </Box>)}
        </>
    );
}

export default CardView;