import { Button, Container, HStack, Input, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Profile from "./Profile";



const ProfileFinder = () => {
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null)


    function handleFormSubmit(e) {
        e.preventDefault()
        fetchUserData()
    }

    function handleInputChange(e) {
        setUser(e.target.value);
    }

    const fetchUserData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${user}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'token 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'
                    }

                });

            const data = await response.json();

            if (data) {
                setUserData(data)
                setLoading(false)
            }
        } catch (e) {
            setLoading(false);
            let message;
            if (e instanceof Error)
                message = e.message
            else message = String(message)
            setErrorMsg(message)
        }

    }, [user])

    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])

    const loadingMessage = loading && <Text>Please wait, data is loading...</Text>
    const errorMessage = errorMsg && <Text>Sorry, Error Occured...</Text>
    return (
        <>
            {loadingMessage}
            {errorMessage}
            <Container
                p={'10px'}
                maxW={'3xl'}
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
            >
                <HStack
                    justifyContent={'center'}
                >
                    <form
                        onSubmit={handleFormSubmit}
                        style={{ display: 'flex' }}
                    >
                        <Input
                            w={'300px'}
                            placeholder="Search Github Username..."
                            type={'text'}
                            value={user}
                            onChange={handleInputChange}
                        />
                        <Button
                            colorScheme={'blue'}
                            type="submit"
                        >
                            Search
                        </Button>
                    </form>
                </HStack>
                <Profile user={userData} />
            </Container>
        </>
    )
}

export default ProfileFinder