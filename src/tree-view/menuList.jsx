import PropTypes from 'prop-types'
import MenuItem from "./menuItem"
import { UnorderedList } from '@chakra-ui/react'


const MenuList = ({ list }) => {

  const listOfElements = list && list.length
    ? list.map((listItem, index) => {
      return (
        <MenuItem
          key={index}
          item={listItem}
        />
      )
    })
    : null

  return (
    <>
      <UnorderedList>
        {listOfElements}
      </UnorderedList>
    </>
  )
}

MenuList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

export default MenuList