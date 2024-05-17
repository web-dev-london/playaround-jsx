
import { ListItem, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SearchView = ({ view, handleItemClick }) => {


    const findItem = view
        && view.length
        ? view.map((item, index) => {
            const styles = {
                cursor: 'pointer',
            }
            return (
                <ListItem
                    style={styles}
                    key={index}
                    onClick={handleItemClick}
                >
                    {item}
                </ListItem>
            )
        })
        : null

    return (
        <>
            <UnorderedList
                listStyleType={'none'}
            >
                {findItem}
            </UnorderedList>
        </>
    )
}

SearchView.propTypes = {
    view: PropTypes.arrayOf(PropTypes.string),
    handleItemClick: PropTypes.func
}

export default SearchView