import { PropTypes } from 'prop-types'
import { Box, ListItem, Text } from "@chakra-ui/react"
import MenuList from "./menuList"
import { useState } from "react"



const MenuItem = ({ item }) => {
  const [toggle, setToggle] = useState({})


  const handleToggle = (toggledIcon) => {
    setToggle({
      ...toggle, [toggledIcon]: !toggle[toggledIcon],
    })
  }



  const clickIcon = item
    && item.children
    && item.children.length
    ? <Text
      ml={2}
      as={'span'}
      onClick={() => handleToggle(item.label)}
    >
      {toggle[item.label] ? '-' : '+'}
    </Text> : null

  const childrenCount = item
    && item.children
    && item.children.length > 0
    && toggle[item.label]
    ? <MenuList
      list={item.children}
    />
    : null

  return (
    <>
      <ListItem>
        <Box
          display={'flex'}
          cursor={'pointer'}
        >
          <Text
            as={'p'}
          >
            {item.label}
          </Text>
          {clickIcon}
        </Box>
        {childrenCount}
      </ListItem>
    </>
  )
}

MenuItem.propTypes = {
  item: PropTypes.object
}

export default MenuItem