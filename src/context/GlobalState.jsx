import { PropTypes } from 'prop-types';
import { createContext, useState } from "react";
import router from '../main';



export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [recipes, setRecipes] = useState();
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [detailsData, setDetailsData] = useState();
    const [favorite, setFavorite] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search= ${searchParam}`);
            response.json().then(data => {

                if (data.data.recipes) {
                    setRecipes(data.data.recipes);
                    setLoading(false);
                    setSearchParam('')
                    router.navigate('/')
                }
            })

        } catch (e) {
            let message;
            if (e instanceof Error)
                message = e.message;
            else message = String(message)
            setErrorMsg(message)
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleLinkToFavorite(currentItem) {
        let copyFavorite = [...favorite];
        const index = copyFavorite.findIndex(item => item.id === currentItem.id);
        if (index === -1) {
            copyFavorite.push(currentItem);
        } else {
            copyFavorite.splice(index, 1);
        }

        setFavorite(copyFavorite)
    }

    const value = {
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipes,
        errorMsg,
        detailsData,
        setDetailsData,
        setLoading,
        setErrorMsg,
        favorite,
        setFavorite,
        handleLinkToFavorite
    }


    return (
        <>
            <GlobalContext.Provider
                value={value}
            >
                {children}
            </GlobalContext.Provider>
        </>
    );
}

GlobalState.propTypes = {
    children: PropTypes.element
}

export default GlobalState;