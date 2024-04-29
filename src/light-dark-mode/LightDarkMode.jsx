import { Button, Heading, Text, Box } from "@chakra-ui/react"
import LocalStorage from "./LocalStorage"
import './styles.css'


const LightDarkMode = () => {
    const [theme, setTheme] = LocalStorage('mode', 'dark');

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme);

    return (
        <>
            <Box
                className='toggleMode'
                data-theme={theme}
            >
                <Heading
                    as={'h3'}
                    fontSize={'18px'}
                    mb={'2rem'}
                >
                    LightDarkMode
                </Heading>
                <Text
                    as={'p'}
                    mb={'1rem'}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt nostrum itaque quis ea optio soluta provident? Itaque delectus unde repellendus voluptatibus vero. Saepe veritatis pariatur illo quae itaque consectetur.
                    Quae quis voluptatibus itaque laudantium ut, esse quo tempore sunt doloremque eaque facilis maiores qui at ex cumque. Ipsam, nobis laborum blanditiis magni vel deserunt animi? Quaerat vitae modi nulla.
                </Text>
                <Button
                    as={'button'}
                    onClick={handleToggleTheme}
                    colorScheme="pink"
                >
                    Change Theme
                </Button>
            </Box>
        </>
    )
}

export default LightDarkMode