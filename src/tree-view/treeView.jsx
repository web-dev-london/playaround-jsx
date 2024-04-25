import MenuList from "./menuList"
import PropTypes from 'prop-types'


const TreeView = ({ menus }) => {


  return (
    <>
      <MenuList
        list={menus}
      />
    </>
  )
}

TreeView.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object)
}
export default TreeView